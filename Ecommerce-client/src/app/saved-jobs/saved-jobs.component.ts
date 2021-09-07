import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavAppService } from '../Shared/sav-app.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css']
})
export class SavedJobsComponent implements OnInit {

  constructor( public savappServices: SavAppService, private router:Router) { }
  displayedColumns: string[] = ['title', 'role', 'company', 'location', 'salary', 'experience','action'];
  dataSource = this.savappServices.savedjobs;
  ngOnInit() {}

  viewJobs(_id){
    this.router.navigate(['job-desc',_id]);
  }

}
