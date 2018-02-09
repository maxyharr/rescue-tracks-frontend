import { Injectable, Injector } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs";

import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let auth: AuthenticationService = this.injector.get(AuthenticationService);

        if(auth.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${auth.getToken()}`
                }
            });
        }

        return next.handle(request);
    }
}
