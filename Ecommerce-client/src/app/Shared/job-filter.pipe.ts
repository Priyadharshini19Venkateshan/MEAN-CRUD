import { Pipe, PipeTransform } from '@angular/core';
import { Job } from './jobs.model';


@Pipe({
  name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

  transform(jobs:Job[],searchTerm: string): Job[]  {
   
  
    if(!jobs || !searchTerm){
      return jobs;
    }
    
    return jobs.filter( user =>
          ( user.role.toLowerCase().indexOf(searchTerm.toLowerCase()) && 
          user.company.toLowerCase().indexOf(searchTerm.toLowerCase()) &&
          user.title.toLowerCase().indexOf(searchTerm.toLowerCase()) &&
          user.location.toLowerCase().indexOf(searchTerm.toLowerCase()) )
        !== -1 );
  
    }
  }


