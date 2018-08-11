import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APIModule } from "../api/api.module";
import { MeetingService } from "./meeting.service";
import { AuthenticationInterceptor } from "../authentication/authentication.interceptor";
import { FormatDatePipeModule } from "pipes/format-date/format-date.pipe.module";

@NgModule({
  imports: [
    FormatDatePipeModule,
    APIModule,
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
