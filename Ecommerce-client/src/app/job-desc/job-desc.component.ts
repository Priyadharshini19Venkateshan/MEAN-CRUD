import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../Shared/jobs.model';
import { JobsService } from '../Shared/jobs.service';
import { SavAppService } from '../Shared/sav-app.service';


@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.css']
})
export class JobDescComponent implements OnInit {

   job = new Job();
  _id: any;
  title: string;
  role: string;
  company: string;
  location: string;
  experience: number;
  salary: number;
  noofpos: number;
  qualification: string;
  compinfo: string;
  jobdesc: string;
  degree: string;
  constructor(public jobsService:JobsService, private actRoute:ActivatedRoute,
    private route: Router,public savappServices: SavAppService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this._id = this.actRoute.snapshot.params._id;
  this.getdata();
    
  }

  getdata(){
    this.jobsService.getJob(this._id).subscribe(res =>{
      this.job = res as Job; 
      this.title = this.job.title;
      this.role = this.job.role;
      this.company = this.job.company;
      this.location= this.job.location,
      this.salary = this.job.salary,
      this.experience = this.job.experience,
      this.noofpos =  this.job.noofpos,
      this.qualification = this.job.qualification,
      this.degree = this.job.degree,
      this.compinfo = this.job.compinfo,
      this.jobdesc = this.job.jobdesc  
       })        
  }

  goBack(){
    this.route.navigate(['/job-list'])
  }

  applyJob(_id){
    this.jobsService.getJob(this._id).subscribe(res =>{
      this.job = res as Job; 
      this.savappServices.add_apply_jobs(this.job);
       })    
       this._snackBar.open("Applied Successfully!!!", "cancel")  
  }


}
