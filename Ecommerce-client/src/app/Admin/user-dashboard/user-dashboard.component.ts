import { Component, OnInit } from '@angular/core';

import { Job } from 'src/app/Shared/jobs.model';
import { JobsService } from 'src/app/Shared/jobs.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



 


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {
 
  constructor( public jobsService: JobsService,private router:Router) { }
 
  displayedColumns: string[] = ['title', 'role', 'company', 'location','action'];
 
  dataSource=  this.jobsService.getJobList().subscribe((res) => {
    this.jobsService.ArrayofJob = res as Job[];
    }); 
    
   

    ngOnInit() {
     this.refreshJobsList();
  }

 refreshJobsList() {
    this.jobsService.getJobList().subscribe((res) => {
  this.jobsService.ArrayofJob = res as Job[];
    });
  } 

  deleteJob(_id:string){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.jobsService.deleteJobList(_id).subscribe((res) => {
       this.refreshJobsList();
     });
    }
  }

  create(){
    this.router.navigateByUrl('/add');
  }
  
  editJob(_id){
   /* this.router.navigate(['/user-dash',
    job._id,job.title,job.role,job.company,job.location,job.salary,job.experience,job.noofpos,
    job.qualification,job.degree,job.compinfo, job.jobdesc]); */
    this.router.navigate(['/user-dash',_id]);
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.jobsService.NewJob = {
      _id: "",
      title:"", 
      role: "",
      company: "",
      location: "",
      salary: null,
      experience: null,
      noofpos: null,
      qualification: "",
      degree: "",
      compinfo: "",
      jobdesc: ""
      
    }
  }

 


 

  


}


