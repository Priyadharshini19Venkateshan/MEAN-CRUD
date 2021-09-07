import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './Admin/add-job/add-job.component';
import { EditJobComponent } from './Admin/edit-job/edit-job.component';
import { UserDashboardComponent } from './Admin/user-dashboard/user-dashboard.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { JobListComponent } from './job-list/job-list.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';

const routes: Routes = [
  {path:'', pathMatch:"full",redirectTo: 'job-list'},
  {path:"add", component:AddJobComponent},
  {path:"user-dash", component:UserDashboardComponent},
  {path:'user-dash/:_id',component:EditJobComponent},

  {path:"job-list", component:JobListComponent},
  {path:"applied-jobs", component:AppliedJobsComponent},
  {path:"saved-jobs", component:SavedJobsComponent},
  {path:"job-desc/:_id", component:JobDescComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
