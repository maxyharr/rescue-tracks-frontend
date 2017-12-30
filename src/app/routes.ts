import { Routes } from '@angular/router'

import { HomePage } from "./pages/home/home";

const EventPapersModule = "./modules/event-papers/event-papers.module#EventPapersModule";

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'event-papers', loadChildren: EventPapersModule},
];
