import { Component, Input } from '@angular/core';

import { ShelterLuvAnimal } from "../../../modules/api";

@Component({
    selector: 'event-papers-page-section',
    templateUrl: 'page-section.html',
})
export class PageComponent {

    @Input()
    public animal: ShelterLuvAnimal;
}
