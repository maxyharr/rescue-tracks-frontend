import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventPapersPage } from "./event-papers.page";

const routes: Routes = [
  { path: '', component: EventPapersPage }
];

export const EventPapersRoutes: ModuleWithProviders = RouterModule.forChild(routes);
