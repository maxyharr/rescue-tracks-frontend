import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Observable, Subscription } from "rxjs";

import { EventService } from "../event.service";
import { APIService, ShelterLuvAnimal } from "../../api";

import { EventModel } from "../event.model";

@Component({
    selector: 'page-event-select-animals',
    templateUrl: 'select-animals.html',
})
export class SelectAnimalsPage implements OnInit, OnDestroy {
    constructor(private route: ActivatedRoute, private apiService: APIService) { }

    private paramsSub: Subscription;
    private eventId: number;

    public animals: Observable<ShelterLuvAnimal[]>;

    ngOnInit() {
        this.paramsSub = this.route.params.subscribe(params => {
            this.eventId = +params["id"];
        });

        this.animals = this.apiService.getRemoteAnimals()
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}
