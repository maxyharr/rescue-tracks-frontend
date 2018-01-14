import { Component, Input } from "@angular/core";

import { AuthenticationService } from "../authentication.service";

@Component({
    selector: 'page-auth-register',
    templateUrl: 'register.page.html',
})
export class RegisterPage {
    constructor(private authenticationService: AuthenticationService) { }

    @Input()
    public firstName: string;

    @Input()
    public lastName: string;

    @Input()
    public email: string;

    @Input()
    public password: string;

    @Input()
    public confirmPassword: string;

    public register() {
        this.authenticationService
            .register(this.email, this.password, this.firstName, this.lastName)
            .subscribe((token: {token: string}) => this.authenticationService.storeTokenAndGoHome(token) );
    }

    public valid(): boolean {
        return !!this.firstName
            && !!this.lastName
            && !!this.email
            && /.+@.+\..+/.test(this.email)
            && !!this.password
            && !!this.confirmPassword
            && this.password == this.confirmPassword;
    }
}
