import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Job } from '../Shared/jobs.model';
import { JobsService } from '../Shared/jobs.service';
import { SavAppService } from '../Shared/sav-app.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  searchTerm: string;
  constructor( public jobsService: JobsService, private router:Router,
    public savappServices: SavAppService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.refreshJobsList();
  }

  refreshJobsList() {
    this.jobsService.getJobList().subscribe((res) => {
  this.jobsService.ArrayofJob = res as Job[];
    });
  } 

  viewDesc(_id){
  this.router.navigate(['job-desc',_id]);
  }

  add_save(job){
    this.savappServices.add_save_jobs(job);
    this._snackBar.open("Saved Successfully!!!", "cancel")
  }

}
