import { Component, Input } from '@angular/core';

import * as _ from "lodash";

import { Animal } from "models/animal.model";

@Component({
    selector: 'event-papers-card',
    styleUrls: ["card.scss"],
    templateUrl: 'card.html',
})
export class CardComponent {

    public circleDiameters: number[] = _.chain([_.range(14), _.range(12, -1)])
                                        .flatten()
                                        .map((x: number) => x+3);

    @Input()
    public animal: Animal;
}
