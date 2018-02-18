import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { APIModule } from "../api/api.module";

import { MeetingService } from "./meeting.service";

import { FormatDatePipe } from "./format-date.pipe";

import { AuthenticationInterceptor } from "../authentication/authentication.interceptor";

@NgModule({
  declarations: [
    // Pipes
    FormatDatePipe,
  ],
  imports: [
    APIModule,
  ],
  exports: [
    FormatDatePipe,
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
