import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Job } from './jobs.model'; 


@Injectable({
  providedIn: 'root'
})
export class JobsService {

NewJob: Job;
ArrayofJob : Job[]
readonly baseURL = 'http://localhost:3000/jobs';
 
 
  
constructor(private http: HttpClient) { }

getJobList() {
  return this.http.get(this.baseURL);
}

postJobList(job: Job) {
  return this.http.post(this.baseURL, job);
}

getJob(_id: string) {
  return this.http.get(this.baseURL + `/${_id}`);
}

putJobList(job: Job) {
  return this.http.put(this.baseURL + `/${job._id}`, job);
}

deleteJobList(_id: string) {
  return this.http.delete(this.baseURL + `/${_id}`);
}

}
