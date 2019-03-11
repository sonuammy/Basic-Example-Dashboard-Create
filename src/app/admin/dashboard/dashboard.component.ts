import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  imgpath:string = "assets/user.png";
  Username: string;
  NoOfTeamMember: number;
  TotalCostOfAllProject: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers =[];
  ToDay :Date;
  update: string='';

  constructor(private dashboardservice:DashboardService) {
    
    // setTimeout(()=>{
    //   this.update = 'Welcome message updated at '+ new Date().toLocaleTimeString();
    // },4000);

    // setInterval(()=>{
    //   this.update = new Date().toLocaleDateString();
    //   this.update = new Date().toLocaleTimeString();
    // },1000);
  }

  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "Amit Surya Singh";
    this.NoOfTeamMember = 67;
    this.TotalCostOfAllProject = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.7;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();

    this.Clients = [
      "Manhatten Association", 
      "Conduent Bussiness India Pvt. Ltd.",
      "Zycus Infotech Pvt. Ltd."
    ];

    this.Projects = [
      "Project A",
      "Project B",
      "Project C",
      "Project D",
    ];

    for(var i = 2019 ; i >= 2010; i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardservice.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region: "East", Members:[
          { ID : 1, Name: "Ford", Status: "Available"},
          { ID : 2, Name: "Miller", Status: "Available"},
          { ID : 3, Name: "Jones", Status: "Busy"},
          { ID : 4, Name: "James", Status: "Busy"}
        ]
      },
      {
        Region: "South", Members:[
          { ID : 1, Name: "Nikes", Status: "Available"},
          { ID : 2, Name: "Michael", Status: "Available"},
          { ID : 3, Name: "Sumit", Status: "Available"},
          { ID : 4, Name: "Jonnes", Status: "Available"}
        ]
      },
      {
        Region: "West", Members:[
          { ID : 1, Name: "Rahul", Status: "Busy"},
          { ID : 2, Name: "Gagudodi", Status: "Available"},
          { ID : 3, Name: "Sumit", Status: "Busy"},
          { ID : 4, Name: "Sams", Status: "Available"}
        ]
      },
      {
        Region: "North", Members:[
          { ID : 1, Name: "Jacklin", Status: "Available"},
          { ID : 2, Name: "Watson", Status: "Busy"},
          { ID : 3, Name: "Sumit", Status: "Available"},
          { ID : 4, Name: "Maxshell", Status: "Busy"}
        ]
      },
    ]
  }
  onProjectChange($event) {
    if($event.target.innerHTML == "Project A"){
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52536;
    }
    else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 28113507;
      this.CurrentExpenditure = 54788;
      this.AvailableFunds = 9536;
    }
    else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 113507;
      this.CurrentExpenditure = 524788;
      this.AvailableFunds = 536;
    }
    else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 7113507;
      this.CurrentExpenditure = 98788;
      this.AvailableFunds = 1536;
    }
  }
}
