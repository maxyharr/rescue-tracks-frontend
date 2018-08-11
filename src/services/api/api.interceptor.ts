import { Injectable, Inject  } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { BASE_RESCUE_TRACKS_URL } from "constants";

import { Observable } from "rxjs";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
    constructor(@Inject(BASE_RESCUE_TRACKS_URL) private baseUrl: string) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!/^https?:\/\//.test(request.url)) {
            request = request.clone({url: `${this.baseUrl.replace(/^\//, "")}/${request.url.replace(/^\//, "")}`});
        }

        return next.handle(request);
    }
}
