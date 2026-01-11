import { Database } from './database.types'; // Assumed generated from Supabase CLI

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Team = Database['public']['Tables']['teams']['Row'];
export type TeamMember = Database['public']['Tables']['team_members']['Row'] & {
  profiles: Pick<Profile, 'full_name' | 'email' | 'avatar_url'>;
};
export type Subscription = Database['public']['Tables']['subscriptions']['Row'];

export type UserRole = 'owner' | 'member' | 'viewer';

export interface CreateTeamInput {
  name: string;
  slug: string;
}

export interface InviteMemberInput {
  email: string;
  role: UserRole;
  teamId: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  priceId: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
}