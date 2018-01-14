import { Component } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { ShelterLuvAnimal } from "../../modules/api/shelter-luv.animal";
import { OnInit } from "@angular/core";

import { APIService } from "../../modules/api/api.service";

@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage implements OnInit {
    constructor(private api: APIService) { }

    ngOnInit(): void {}

}
