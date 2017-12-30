import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { APIService, ShelterLuvAnimal } from "../../modules/api";

@Component({
    selector: 'page-event-papers',
    templateUrl: 'event-papers.html',
})
export class EventPapersPage implements OnInit {
    constructor(private api: APIService) { }

    ngOnInit(): void {
        this.api.getEventPapers().subscribe((values: ShelterLuvAnimal[]) => {

        });
    }
}
