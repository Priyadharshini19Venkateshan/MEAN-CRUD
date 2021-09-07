import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/Shared/jobs.model';
import { JobsService } from 'src/app/Shared/jobs.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  job = new Job();
  _id: any;
 
  constructor(public jobsService:JobsService, private actroute:ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    // this.resetForm();
    // this.refreshJobsList();
   /*  this.actroute.paramMap.subscribe(params =>{
      this._id= params.get('_id');
      this.title=params.get('title');
      this.role=params.get('role');
      this.company=params.get('company');
      this.location=params.get('location');
      this.salary= params.get('salary');
      this.experience=params.get('experience');
      this.noofpos=params.get('noofpos');
      this.qualification=params.get('qualification');
      this.degree=params.get('degree');
      this.compinfo=params.get('compinfo');
      this.jobdesc=params.get('jobdesc');
    })
    this.jobsService.NewJob = {
      _id: this._id,
      title:this.title, 
      role: this.role,
      company: this.company,
      location: this.location,
      salary: this.salary,
      experience: this.experience,
      noofpos: this.noofpos,
      qualification: this.qualification,
      degree: this.degree,
      compinfo: this.compinfo,
      jobdesc: this.jobdesc
    }*/
    this._id = this.actroute.snapshot.params._id;
    this.getdata();
  }

  getdata(){
    this.jobsService.getJob(this._id).subscribe(res =>{
      this.job = res as Job; 
      this.jobsService.NewJob = {
        _id: this._id,
        title:this.job.title, 
        role: this.job.role,
        company: this.job.company,
        location: this.job.location,
        salary: this.job.salary,
        experience: this.job.experience,
        noofpos: this.job.noofpos,
        qualification: this.job.qualification,
        degree: this.job.degree,
        compinfo: this.job.compinfo,
        jobdesc: this.job.jobdesc  
      }
       })  
  }


  onSubmit(form: NgForm) {
      this.jobsService.putJobList(form.value).subscribe((res) => {
        this.resetForm(form);
      });
      this.route.navigateByUrl('/user-dash');
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
    } }


}


