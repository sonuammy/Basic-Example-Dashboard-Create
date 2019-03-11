import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  getTeamMembersSummary():any[] {
  var TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 52, TemporarilyUnavailableMembers: 15 },
      { Region: "South", TeamMembersCount: 35, TemporarilyUnavailableMembers: 33 },
      { Region: "West", TeamMembersCount: 11, TemporarilyUnavailableMembers: 1 },
      { Region: "North", TeamMembersCount: 64, TemporarilyUnavailableMembers: 47 }
    ];
    return TeamMembersSummary;
  }
  
}
