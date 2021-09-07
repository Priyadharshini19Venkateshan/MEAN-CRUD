import { Component, OnInit } from '@angular/core';
import { SavAppService } from '../Shared/sav-app.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  constructor(public savappServices: SavAppService) { }

  displayedColumns: string[] = ['title', 'role', 'company', 'location', 'salary', 'experience'];
  dataSource = this.savappServices.appliedjobs;
  ngOnInit(){
  }

}
