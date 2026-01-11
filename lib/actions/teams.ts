'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { redirect } from 'next/navigation';

const createTeamSchema = z.object({
  name: z.string().min(3).max(50),
  slug: z.string().min(3).max(20).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric'),
});

interface TeamResult {
  id: string
  slug: string
}

interface ProfileResult {
  id: string
}

export async function createTeam(formData: FormData) {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return { error: 'Unauthorized' };
  }

  const rawData = {
    name: formData.get('name'),
    slug: formData.get('slug'),
  };

  const validated = createTeamSchema.safeParse(rawData);

  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors };
  }

  const { data: teamData, error: teamError } = await supabase
    .from('teams')
    .insert({
      name: validated.data.name,
      slug: validated.data.slug,
      owner_id: user.id,
    } as any)
    .select('id, slug')
    .single();

  const team = teamData as TeamResult | null;

  if (teamError || !team) {
    return { error: teamError?.message || 'Failed to create team' };
  }

  const { error: memberError } = await supabase
    .from('team_members')
    .insert({
      team_id: team.id,
      user_id: user.id,
      role: 'owner',
    } as any);

  if (memberError) {
    console.error('Failed to add owner to team', memberError);
    return { error: 'Failed to initialize team membership' };
  }

  revalidatePath('/dashboard');
  redirect(`/dashboard/team/${team.slug}`);
}

export async function inviteMember(teamId: string, email: string, role: 'member' | 'viewer') {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Unauthorized' };

  const { data: profileData } = await supabase
    .from('profiles')
    .select('id')
    .eq('email', email)
    .single();

  const profile = profileData as ProfileResult | null;

  if (!profile) {
    return { error: 'User not found. They must sign up first.' };
  }

  const { error } = await supabase
    .from('team_members')
    .insert({
      team_id: teamId,
      user_id: profile.id,
      role: role,
    } as any);

  if (error) return { error: error.message };

  revalidatePath('/dashboard');
  return { success: true };
}
