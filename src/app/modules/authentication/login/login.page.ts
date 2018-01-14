import { Component, Input } from "@angular/core";

import { AuthenticationService } from "../authentication.service";

@Component({
    selector: 'page-auth-login',
    templateUrl: 'login.page.html',
})
export class LoginPage {
    constructor(private authenticationService: AuthenticationService) { }

    @Input()
    public email: string;

    @Input()
    public password: string;

    public login() {
        this.authenticationService
            .login(this.email, this.password)
            .subscribe((token: {token: string}) => this.authenticationService.storeTokenAndGoHome(token) );
    }
}
