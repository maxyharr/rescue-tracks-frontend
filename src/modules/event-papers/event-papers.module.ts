import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { APIModule } from "services/api/api.module";
import { EventPapersPage } from "./event-papers.page";
import { PageComponent } from "./page/page.component";
import { PageSectionComponent } from "./page/page-section.component";
import { CardComponent } from "./card/card.component";
import { DisplayableAgeFromMonthsPipe } from "pipes/displayable-age-from-months/displayable-age-from-months.pipe";
import { EventPapersRoutingModule } from "./event-papers-routing.module";

@NgModule({
  declarations: [
    PageComponent,
    PageSectionComponent,
    CardComponent,
    DisplayableAgeFromMonthsPipe,
    EventPapersPage,
  ],
  imports: [
    APIModule,
    CommonModule,
    EventPapersRoutingModule,
  ],
})
export class EventPapersModule { }
