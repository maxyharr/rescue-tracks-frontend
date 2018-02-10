import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Observable, Subscription } from "rxjs";


import { Meeting } from "../meeting.model";

import { MeetingService } from "../meeting.service";

@Component({
    selector: 'page-meeting-end',
    templateUrl: 'end.html',
})
export class EndPage implements OnInit, OnDestroy {

    private paramsSub: Subscription;
    public meeting: Observable<Meeting>;
    public eventId: number;

    constructor(private route: ActivatedRoute, private router: Router, private meetingService: MeetingService) { }

    ngOnInit(): void {
        this.eventId = Number(localStorage.getItem("eventId"));
        this.paramsSub = this.route.params.subscribe(params => {
            this.meeting = this.meetingService.getMeeting(+params.id)
                .map((meeting) => Object.assign(new Meeting(), meeting));
        });
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
    }

    endMeeting(): void {
        this.meeting.subscribe((meeting) =>
            this.meetingService
                .endCurrentMeetingWithAnimal(meeting.id)
                .subscribe(() => {
                    this.router.navigate(["meetings", meeting.id]);
                })
        );
    }
}
