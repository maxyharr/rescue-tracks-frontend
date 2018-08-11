import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Observable, Subscription } from "rxjs";
import * as _ from "lodash";

import {
    Animal,
    EventModel,

    APIService,
    EventService,
} from "../../../modules";

@Component({
    selector: 'page-event-select-animals',
    templateUrl: 'select-animals.html',
    styleUrls: ['select-animals.scss'],
})
export class SelectAnimalsPage implements OnInit, OnDestroy {
    constructor(private route: ActivatedRoute, private router: Router, private apiService: APIService) { }

    private paramsSub: Subscription;
    private eventId: number;

    public animals: Observable<Animal[]>;
    public selectedAnimals: {[key: number]: boolean};

    ngOnInit(): void {
        this.selectedAnimals = {};
        this.paramsSub = this.route.params.subscribe(params => {
            this.eventId = +params["id"];
            this.animals = this.apiService.getAnimalsForEvent(this.eventId, true);

            this.animals.subscribe((animals) =>
                _.chain(animals)
                    .filter("selected")
                    .map("externalId")
                    .each((id: number) => {
                        this.selectedAnimals[id] = true;
                    })
                    .value()
            )
        });
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
    }

    toggle(id: number): void {
        this.selectedAnimals[id] = !this.selectedAnimals[id];
    }

    hasSelectedAnimals(): boolean {
        return (_.reject(this.selectedAnimals, (val) => !val).length) > 0;
    }

    submitAnimals(): void {
        this.apiService.setAnimalsInEvent(
            this.eventId,
            _.chain(this.selectedAnimals).pickBy(val => val).keys().value()
        ).subscribe(() => {
            this.router.navigate(["events", this.eventId])
        });
    }
}
