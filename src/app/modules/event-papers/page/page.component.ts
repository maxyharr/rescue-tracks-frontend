import { Component, Input } from '@angular/core';

import { ShelterLuvAnimal } from "../../../modules/api";

@Component({
    selector: 'event-papers-page',
    templateUrl: 'page.html',
})
export class PageComponent {

    @Input()
    public leftAnimal: ShelterLuvAnimal;
    @Input()
    public rightAnimal: ShelterLuvAnimal;

}
