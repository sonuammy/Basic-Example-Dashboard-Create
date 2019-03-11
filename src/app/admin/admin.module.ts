import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    DashboardComponent,
    AboutComponent
  ],
  providers: [DashboardService]
})
export class AdminModule { }
