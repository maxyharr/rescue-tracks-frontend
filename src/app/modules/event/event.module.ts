import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { APIModule } from "../api/api.module";
import { MeetingModule } from "../meeting/meeting.module";

import { EventIsActivePipe } from "./event-is-active.pipe";
import { FormatEventDatePipe } from "./format-event-date.pipe";
import { TimeAgoPipe } from "./time-ago.pipe";

import { EventService } from "./event.service";

import { AuthenticationInterceptor } from "../authentication/authentication.interceptor";

@NgModule({
  declarations: [
    // Pipes
    EventIsActivePipe,
    FormatEventDatePipe,
    TimeAgoPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,

    APIModule,
  ],
  exports: [
    EventIsActivePipe,
    FormatEventDatePipe,
    TimeAgoPipe,
  ],
  providers: [
    EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
})
export class EventModule { }
