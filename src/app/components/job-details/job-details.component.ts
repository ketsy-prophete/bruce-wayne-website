import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

// @Component({
//   selector: 'app-job-details',
//   templateUrl: './job-details.component.html',
//   styleUrls: ['./job-details.component.css']
// })
// export class JobDetailsComponent implements OnInit {
//   jobList: any[] = [];
//   currentJob: any = null;

//   constructor(private jobService: JobService, private activatedRoute: ActivatedRoute) { }

//   ngOnInit(): void {

//       let jobId = parseInt(this.activatedRoute.snapshot.paramMap.get("id") ?? "");
//       console.log(jobId);

//       this.jobService.getJob(jobId).subscribe(job => {
//         this.currentJob = job;
//         console.log(job);
//       });
//     }
// }



