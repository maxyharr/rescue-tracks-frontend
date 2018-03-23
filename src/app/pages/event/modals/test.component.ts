import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: "test-modal",
    templateUrl: "./test.html",
})
export class TestModalComponent {
    public isActive: boolean = true;

    constructor(private router: Router) {}

    closeModal() {
        this.isActive = false;
    }
}
