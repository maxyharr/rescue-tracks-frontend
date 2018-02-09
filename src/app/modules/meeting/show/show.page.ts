import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

import { ReplaySubject, Subscription } from "rxjs";

import { MeetingService } from "../meeting.service";

import { Attendee } from "../../event";
import { Animal } from "../../api";
import { Meeting } from "../meeting.model";

@Component({
    selector: "page-meeting-show",
    templateUrl: "show.html",
    styleUrls: ["show.scss"],
})
export class MeetingPage implements OnInit, OnDestroy {

    private paramsSub: Subscription;

    public counselorMeeting: ReplaySubject<Meeting>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer,
        private meetingService: MeetingService) { }

    ngOnInit(): void {
        this.counselorMeeting = new ReplaySubject(1);
        this.paramsSub = this.route.params.subscribe(params => {
            this.meetingService
                .getMeeting(+params.id)
                .map((meeting) => Object.assign(new Meeting(), meeting))
                .subscribe(this.counselorMeeting);
        });
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
    }

    cleanPhotoUrl(url): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }

    meetingForAnimal(animal: Animal): Meeting {
        return this.meetingService.currentMeetingForAnimal(animal);
    }

    startMeeting(animal: Animal) {
        if(this.meetingForAnimal(animal)) {
            alert(`${animal.name} is already in a meeting! Please check with the adoption counselor listed for more information.`);
            return;
        }
        this.counselorMeeting.subscribe((meeting) => {
            localStorage.setItem("meetWithAttendee", JSON.stringify(meeting.attendee))
            localStorage.setItem("meetWithAnimal", JSON.stringify(animal));
            this.router.navigate(["meetings", meeting.id, "with"]);
        });
    }
}
