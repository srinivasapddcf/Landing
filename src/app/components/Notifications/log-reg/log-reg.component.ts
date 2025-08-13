import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-log-reg',
    templateUrl: './log-reg.component.html',
    styleUrls: ['./log-reg.component.css'],
    standalone: false
})
export class LogRegComponent implements OnInit {


    MobileNum: any;
    Password: any;
    constructor(private router: Router,) { }

    ngOnInit(): void {
    }
    // GoTopage() {
    //     this.router.navigate(['/mentorModule/NotificationsForJobs']);

    // }
}
