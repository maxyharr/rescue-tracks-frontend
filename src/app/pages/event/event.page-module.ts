import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  EventRoutes,

  EventIndexPage,
  EventPage,
  SelectAnimalsPage,
  StartEventPage,
  StartMeetingPage,
} from ".";

import { EventModule } from "../../modules";

@NgModule({
  declarations: [
    EventIndexPage,
    EventPage,
    SelectAnimalsPage,
    StartEventPage,
    StartMeetingPage,
  ],
  imports: [
    CommonModule,
    FormsModule,

    EventModule,

    EventRoutes,
  ],
})
export class EventPageModule { }
