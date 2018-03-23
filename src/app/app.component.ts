import { Component } from '@angular/core';

import { AuthenticationService } from "./modules/authentication/authentication.service";

import { Organization } from "./pages/organization/organization.model";

@Component({
    selector: 'rescue-tracks-app',
    templateUrl: 'app.component.html',
    styleUrls: ["app.component.scss"],
})
export class AppComponent {

    public displayName: string;
    public currentOrganization: Organization;

    constructor(private authenticationService: AuthenticationService) {
        this.displayName = authenticationService.displayableUserName();
        this.currentOrganization = authenticationService.currentOrganization();
    }

    public isLoggedIn(): boolean {
        return this.authenticationService.isLoggedIn();
    }

    public logout(): void {
        this.authenticationService.logout();
    }
}
