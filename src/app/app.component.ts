import { Component } from '@angular/core';

import { AuthenticationService } from "./modules/authentication/authentication.service";

@Component({
    selector: 'rescue-tracks-app',
    templateUrl: 'app.component.html',
    styleUrls: ["app.component.scss"],
})
export class AppComponent {

    public displayName: string;

    constructor(private authenticationService: AuthenticationService) {
        authenticationService.displayableUserName().then((name) => {
            this.displayName = name;
        });
    }

    public isLoggedIn(): boolean {
        return this.authenticationService.isLoggedIn();
    }

    public logout(): void {
        this.authenticationService.logout();
    }
}
