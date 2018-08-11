import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventPapersPage } from "./event-papers.page";

const routes: Routes = [
  { path: '', component: EventPapersPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventPapersRoutingModule{}