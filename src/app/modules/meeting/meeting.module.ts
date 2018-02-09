import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { APIModule } from "../api/api.module";

import { MeetingPage } from "./show/show.page";
import { MeetWithPage } from "./meet-with/meet-with.page";

import { MeetingRoutes } from "./meeting.routes";
import { MeetingService } from "./meeting.service";

import { AuthenticationInterceptor } from "../authentication/authentication.interceptor";

@NgModule({
  declarations: [
    // Pages
    MeetingPage,

    // Modals
    MeetWithPage,

    // Pipes
  ],
  imports: [
    CommonModule,
    FormsModule,

    APIModule,

    MeetingRoutes,
  ],
  providers: [
    MeetingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
})
export class MeetingModule { }
