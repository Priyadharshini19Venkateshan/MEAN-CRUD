import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';


import { Job } from 'src/app/Shared/jobs.model';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/Shared/jobs.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  jobDetails:FormGroup;
  constructor(public jobsService: JobsService, private route:Router ) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.jobsService.postJobList(form.value).subscribe((res) => {
        this.resetForm(form);
      });
    }
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
