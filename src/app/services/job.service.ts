import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  listOfJobs: any[] = [
    {
      id: 1,
      title: "Head of Research and Development",
      description: "Led the R&D team in the successful development of the WayneTech Batmobile.",
      duration: "3 years",
      employer: "Wayne Enterprises"
    },
    {
      id: 2,
      title: "Director of Cybersecurity",
      description: "Orchestrated the swift response to cyber attacks on Wayne Enterprises.",
      duration: "5 years",
      employer: "Queen Industries"
    },
    {
      id: 3,
      title: "CTO",
      description: "Pioneered the integration of artificial intelligence into the company's operations.",
      duration: "7 years",
      employer: "Kord Industries"
    }
  ]

  constructor() { }

  getJobs(): Observable<any[]> {
    return of(this.listOfJobs);
  }

  getJob(id: number): Observable<any> {
    let job = this.listOfJobs.find(j => j.id === id);
    return of(job);
  }
}


