import { Component } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { APIService, ShelterLuvAnimal } from "../../modules/api";

@Component({
    selector: 'page-event-papers',
    templateUrl: 'event-papers.html',
})
export class EventPapersPage {

    public animals: Observable<ShelterLuvAnimal[]>;

    constructor(private api: APIService) {
        this.animals = this.api.getEventPapers();
        this.animals.subscribe((val: ShelterLuvAnimal[]) => {
            // debugger;
        });
    }
}
