import { Component, Input } from '@angular/core';
import { Animal } from "models/animal.model";

@Component({
    selector: 'event-papers-page-section',
    template: `
    <div class="animal">
        <div class="name" [class.small]="animal?.name.length > 20">
            <span>{{animal?.name}}</span>
        </div>
        <div class="border"></div>
        <div class="thumbnail" style="background-image:url({{animal?.photo}});"></div>
        <div class="stats">
            <div class="age_sex">
                {{animal?.sex}} | {{animal?.age | displayableAgeFromMonths}}
            </div>
            <div class="paw"></div>
            <div class="breed">{{animal?.breed}}</div>
            <div class="paw"></div>
            <div class="size">
                <span *ngIf="animal?.age < 12">
                    Expected&nbsp;
                </span>
                Size: {{animal.size}}
            </div>
        </div>
    </div>
    `
})
export class PageSectionComponent {

    @Input()
    public animal: Animal;
}
