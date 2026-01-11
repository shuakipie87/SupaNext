import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { TeamManager } from '@/components/teams/team-manager'
import { TeamMember } from '@/types'

export default async function TeamDetailPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data: team } = await supabase
    .from('teams')
    .select('id, name, slug')
    .eq('slug', params.slug)
    .single()

  if (!team) notFound()

  const { data: membersData } = await supabase
    .from('team_members')
    .select(`
      id,
      role,
      user_id,
      profiles:user_id (
        id,
        full_name,
        email,
        avatar_url
      )
    `)
    .eq('team_id', team.id)

  const members = (membersData || []) as any[]

  const currentUserMember = members.find(m => m.user_id === user.id)
  if (!currentUserMember) notFound()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{team.name}</h2>
        <p className="text-muted-foreground">
          Manage your team members and settings for {team.name}.
        </p>
      </div>

      <TeamManager 
        teamId={team.id} 
        members={members} 
        currentUserRole={currentUserMember.role} 
      />
    </div>
  )
}
