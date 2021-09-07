import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavAppService {
  appliedjobs = [];
  savedjobs=[];
  constructor() { }

  
  add_apply_jobs(jobs){
    this.appliedjobs.push(jobs);
  }

  add_save_jobs(jobs){
    this.savedjobs.push(jobs);
  }

  display_applied_jobs(){
    return this.appliedjobs;
  }

  display_saved_jobs(){
    return this.savedjobs;
  }

  clear(){
    this.appliedjobs=[];
    return this.appliedjobs;
  }

  clearSave(){
    this.savedjobs=[];
    return this.savedjobs;
  }
}
