import { createClient } from '@/lib/supabase/server';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

export async function RecentActivity() {
  const supabase = await createClient();

  // Fetch latest 5 profiles to show as recent activity
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, full_name, email, avatar_url, created_at')
    .order('created_at', { ascending: false })
    .limit(5);

  if (!profiles || profiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
        <p>No recent activity yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {profiles.map((profile) => (
        <div key={profile.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={profile.avatar_url || ''} alt="Avatar" />
            <AvatarFallback>
              {profile.full_name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || profile.email[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {profile.full_name || 'Anonymous User'}{' '}
              <span className="text-muted-foreground font-normal">
                joined the platform
              </span>
            </p>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(profile.created_at), { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

