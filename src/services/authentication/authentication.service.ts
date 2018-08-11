import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { Organization } from "models/organization.model";

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) {}

    public login(email: string, password: string): Observable<Object> {
        return this.http
                   .post<Object>(
                       `users/login`,
                       { email, password }
                   );
    }

    public register(email: string, password: string, firstName: string, lastName: string): Observable<Object> {
        return this.http
                   .post<Object>(
                       `users/register`,
                       { email, password, firstName, lastName }
                   );
    }

    public async storeToken(token: string): Promise<void> {
        localStorage.setItem("userToken", token);
    }

    public getToken(): string {
        return localStorage.getItem("userToken");
    }

    public async handleLogin(): Promise<void> {
        let token = this.loadDataFromToken();

        if(!token["currentOrganization"]) {
            this.router.navigateByUrl("/organization/join");
        } else {
            this.router.navigateByUrl("/");
        }
    }

    public loadDataFromToken(): any {
        let payloadString = localStorage.getItem("userToken");

        if(payloadString) {
            let payload: string[] = payloadString.match(/^.+\.(.+)\..+$/);
            return JSON.parse(atob(payload[1]))["data"];
        } else {
            return {data: ""};
        }
    }

    public displayableUserName(): string {
        let data = this.loadDataFromToken();
        let display: string;

        if(data["firstName"]) {
            display = data["firstName"];
            if (data["lastName"]) {
                display += ` ${data["lastName"][0]}.`;
            }
        } else {
            display = data["email"];
        }

        return display;
    }

    public currentOrganization(): Organization {
        let data = this.loadDataFromToken();
        return _.get<Organization>(data, "currentOrganization");
    }

    public async logout(): Promise<void> {
        localStorage.removeItem("userToken");
        this.router.navigateByUrl("/");
    }

    public isLoggedIn(): boolean {
        return !!localStorage.getItem("userToken");
    }

}
