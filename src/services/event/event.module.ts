import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APIModule } from "../api/api.module";
import { APIInterceptor } from "../api/api.interceptor";
import { EventService } from "./event.service";
import { AuthenticationInterceptor } from "../authentication/authentication.interceptor";
import { EventIsActivePipeModule } from "pipes/event-is-active/event-is-active.pipe.module";
import { FormatEventDatePipeModule } from "pipes/format-event-date/format-event-date.pipe.module";
import { TimeAgoPipeModule } from "pipes/time-ago/time-ago.pipe.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventIsActivePipeModule,
    FormatEventDatePipeModule,
    TimeAgoPipeModule,
    APIModule,
  ],
  providers: [
    EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
})
export class EventModule { }
