import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable } from "rxjs";
import "rxjs/add/operator/map";

const BASE_RESCUE_TRACKS_URL = "http://localhost:9000";

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) {}

    public login(email: string, password: string): Observable<Object> {
        return this.http
                   .post<Object>(
                       `${BASE_RESCUE_TRACKS_URL}/users/login`,
                       { email, password }
                   );
    }

    public register(email: string, password: string, firstName: string, lastName: string): Observable<Object> {
        return this.http
                   .post<Object>(
                       `${BASE_RESCUE_TRACKS_URL}/users/register`,
                       { email, password, firstName, lastName }
                   );
    }

    public async storeToken(token: {token: string}): Promise<void> {
        localStorage.setItem("userToken", token.token);
    }

    public async storeTokenAndGoHome(token: {token: string}): Promise<void> {
        this.storeToken(token).then(() => this.router.navigateByUrl("/"));
    }

    public async loadDataFromToken(): Promise<{data: Object}> {
        let payload: string[] = localStorage.getItem("userToken").match(/^.+\.(.+)\..+$/);

        if(payload) {
            return JSON.parse(atob(payload[1]))["data"];
        } else {
            return {data: ""};
        }
    }

    public async displayableUserName(): Promise<string> {
        let data = await this.loadDataFromToken();
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

    public async logout(): Promise<void> {
        localStorage.removeItem("userToken");
        this.router.navigateByUrl("/");
    }

    public isLoggedIn(): boolean {
        return !!localStorage.getItem("userToken");
    }

}
