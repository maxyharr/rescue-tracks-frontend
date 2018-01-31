import { Component } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { APIService, Animal } from "../../modules/api";

@Component({
    selector: 'page-event-papers',
    templateUrl: 'event-papers.html',
})
export class EventPapersPage {

    public animals: Observable<Animal[]>;

    constructor(private api: APIService) {
        // this.animals = this.api.getEventPapers();
        // this.animals.subscribe((val: Animal[]) => {
        //     // debugger;
        // });
    }
}
