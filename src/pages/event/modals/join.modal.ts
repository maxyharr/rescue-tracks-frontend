import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: "modal-event-join",
    templateUrl: "./join.html",
})
export class JoinEventModalComponent {

    constructor(private router: Router) {}

    closeModal() {
    }
}
