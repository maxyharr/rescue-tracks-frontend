import { Component, Input } from '@angular/core';
import { Animal } from "models/animal.model";

@Component({
    selector: 'event-papers-page',
    // templateUrl: 'page.html',
    template: `
    <!-- <div class="animal">
        <div class="name" [class.small]="animal?.name.length > 20">
            <span>{{animal?.name}}</span>
        </div>
        <div class="border"></div>
        <div class="thumbnail" style="background-image:url({{animal?.photo}});"></div>
        <div class="stats">
            <div class="age_sex">{{animal?.sex}} | {{animal?.age | displayableAgeFromMonths}}</div>
            <div class="paw"></div>
            <div class="breed">{{animal?.breed}}</div>
            <div class="paw"></div>
            <div class="size">{{animal.age < 12 ? "Expected ": ""}}Size: {{animal.size}}</div>
        </div>
    </div>


    <div class="page">
        <div class="footer">
            <div class="logo"><img src="/static/images/logo.jpg"></div>
            <div class="url">www.muddypawsrescue.org</div>
            <div class="social">
                <i class="fa fa-facebook"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-instagram"></i>
            </div>
        </div>
    </div>-->
    `
})
export class PageComponent {
    @Input() public leftAnimal: Animal;
    @Input() public rightAnimal: Animal;
}
