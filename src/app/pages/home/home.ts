import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { OnInit } from "@angular/core";

import { AuthenticationService } from "../../modules/authentication";

@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage implements OnInit {
    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        if(!this.authenticationService.currentOrganization()) {
            this.router.navigate(["organization", "join"]);
        } else {
            // should also check if there's a current event
            this.router.navigate(["organization"]);
        }
    }

}
