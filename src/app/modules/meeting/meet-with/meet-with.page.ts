import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Observable, Subscription } from "rxjs";

import * as _ from "lodash";

import { Attendee } from "../../event/attendee.model";
import { Animal } from "../../api"

import { MeetingService } from "../meeting.service";

@Component({
    selector: 'page-meeting-with',
    templateUrl: 'meet-with.html',
})
export class MeetWithPage implements OnInit, OnDestroy {

    private paramsSub: Subscription;
    public meetingId: Observable<number>;
    public attendee: Attendee;
    public animal: Animal;
    public meetingStarted: boolean;

    constructor(private route: ActivatedRoute, private router: Router, private meetingService: MeetingService) {
        this.meetingStarted = false;
    }

    ngOnInit(): void {
        this.attendee = Object.assign(new Attendee(), JSON.parse(localStorage.getItem("meetWithAttendee")));
        this.animal = Object.assign(new Animal(), JSON.parse(localStorage.getItem("meetWithAnimal")));

        this.paramsSub = this.route.params.subscribe(params => {
            this.meetingId = Observable.of(+params.id);
        });
    }

    ngOnDestroy(): void {
        localStorage.removeItem("meetWithAttendee");
        localStorage.removeItem("meetWithAnimal");
        this.paramsSub.unsubscribe();
    }

    startMeeting(): void {
        this.meetingStarted = true;
        this.meetingId.subscribe((id) =>
            this.meetingService
                .startMeetingWithAnimal(id, this.animal)
                .subscribe(() => {
                    this.router.navigate(["meetings", id]);
                    this.meetingStarted = false;
                })
        );
    }
}
