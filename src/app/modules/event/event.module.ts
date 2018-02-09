import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { APIModule } from "../api/api.module";
import { MeetingModule } from "../meeting/meeting.module";

import { EventIndexPage } from "./index/index.page";
import { EventPage } from "./show/show.page";
import { StartEventPage } from "./start/start.page";
import { StartMeetingPage } from "./start-meeting/start-meeting.page";
import { SelectAnimalsPage } from "./select-animals/select-animals.page";

import { EventIsActivePipe } from "./event-is-active.pipe";
import { FormatEventDatePipe } from "./format-event-date.pipe";

import { EventRoutes } from "./event.routes";
import { EventService } from "./event.service";

import { AuthenticationInterceptor } from "../authentication/authentication.interceptor";

@NgModule({
  declarations: [
    // Pages
    EventIndexPage,
    EventPage,
    SelectAnimalsPage,
    StartEventPage,
    StartMeetingPage,

    // Modals

    // Pipes
    EventIsActivePipe,
    FormatEventDatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,

    APIModule,

    EventRoutes,
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
