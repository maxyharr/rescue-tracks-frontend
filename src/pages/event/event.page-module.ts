import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ModalModule } from "modules/components/modal";

import {
  EventRoutes,

  EventIndexPage,
  EventPage,
  SelectAnimalsPage,
  StartEventPage,
  StartMeetingPage,
} from ".";

import { JoinEventModalComponent } from "./modals/join.modal";

import { EventModule } from "modules";

@NgModule({
  declarations: [
    EventIndexPage,
    EventPage,
    SelectAnimalsPage,
    StartEventPage,
    StartMeetingPage,

    JoinEventModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    ModalModule,

    EventModule,

    EventRoutes,
  ],
})
export class EventPageModule { }
