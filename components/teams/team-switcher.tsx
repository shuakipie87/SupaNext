'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Check, ChevronsUpDown, PlusCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { CreateTeamDialog } from './create-team-dialog'

interface Team {
  id: string
  name: string
  slug: string
}

interface TeamSwitcherProps {
  teams: Team[]
}

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const router = useRouter()
  const params = useParams()
  const currentSlug = params?.slug as string
  
  const selectedTeam = teams.find(t => t.slug === currentSlug) || teams[0] || null

  const onSelect = (team: Team) => {
    router.push(`/dashboard/team/${team.slug}`)
  }

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-between">
            {selectedTeam ? (
              <div className="flex items-center gap-2 truncate">
                <Avatar className="h-5 w-5">
                  <AvatarFallback className="text-xs">
                    {selectedTeam.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate">{selectedTeam.name}</span>
              </div>
            ) : (
              'Select team'
            )}
            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]" align="start">
          <DropdownMenuLabel>Teams</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {teams.length > 0 ? (
            teams.map((team) => (
              <DropdownMenuItem
                key={team.id}
                onSelect={() => onSelect(team)}
                className="cursor-pointer"
              >
                <Avatar className="h-5 w-5 mr-2">
                  <AvatarFallback className="text-xs">
                    {team.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {team.name}
                {selectedTeam?.id === team.id && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem disabled>No teams yet</DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <CreateTeamDialog>
            <DropdownMenuItem 
              onSelect={(e) => e.preventDefault()} 
              className="cursor-pointer"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Create team
            </DropdownMenuItem>
          </CreateTeamDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
