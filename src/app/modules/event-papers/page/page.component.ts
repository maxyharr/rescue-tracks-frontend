import { Component, Input } from '@angular/core';

import { Animal } from "../../../modules/api";

@Component({
    selector: 'event-papers-page',
    templateUrl: 'page.html',
})
export class PageComponent {

    @Input()
    public leftAnimal: Animal;
    @Input()
    public rightAnimal: Animal;

}
