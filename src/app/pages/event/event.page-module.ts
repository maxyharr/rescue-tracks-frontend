import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ModalModule } from "../../modules/components/modal/modal.module";

import {
  EventRoutes,

  EventIndexPage,
  EventPage,
  SelectAnimalsPage,
  StartEventPage,
  StartMeetingPage,
} from ".";

import { TestModalComponent } from "./modals/test.component";

import { EventModule } from "../../modules";

@NgModule({
  declarations: [
    EventIndexPage,
    EventPage,
    SelectAnimalsPage,
    StartEventPage,
    StartMeetingPage,
    // TestModalComponent,
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
