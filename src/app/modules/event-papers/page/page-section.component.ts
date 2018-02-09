import { Component, Input } from '@angular/core';

import { Animal } from "../../../modules/api";

@Component({
    selector: 'event-papers-page-section',
    templateUrl: 'page-section.html',
})
export class PageSectionComponent {

    @Input()
    public animal: Animal;
}
