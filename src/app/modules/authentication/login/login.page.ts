import { Component, Input } from "@angular/core";

import { Observable } from "rxjs";

import { AuthenticationService } from "../authentication.service";

@Component({
    selector: "page-auth-login",
    templateUrl: "login.page.html",
    styleUrls: ["login.scss"],
})
export class LoginPage {
    constructor(private authenticationService: AuthenticationService) { }

    @Input()
    public email: string;

    @Input()
    public password: string;

    public errors: Observable<string>;

    public login() {
        this.authenticationService
            .login(this.email, this.password)
            .subscribe(
                (token: {token: string}) => this.authenticationService.storeTokenAndGoHome(token),
                (error: any) => {
                    this.errors = Observable.of(error.error.message);
                }
            );
    }
}
