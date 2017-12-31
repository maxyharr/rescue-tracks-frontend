import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { APIModule } from "../api";

import { EventPapersRoutes } from "./event-papers.routes";
import { EventPapersPage } from "./event-papers.page";

import { CardComponent } from "./card/card.component";
import { DisplayableAgeFromMonthsPipe } from "./displayable-age-from-months.pipe";

@NgModule({
  declarations: [
    CardComponent,
    DisplayableAgeFromMonthsPipe,
    EventPapersPage,
  ],
  imports: [
    APIModule,
    CommonModule,

    EventPapersRoutes,
  ],
})
export class EventPapersModule { }
