import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: "rt-modal",
    templateUrl: "./modal.component.html",
})
export class ModalComponent {
    @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

    @Input() isGeneric: boolean;

    constructor(private router: Router) {}

    closeModal($event) {
        this.router.navigate([{outlets: {modal: null}}]);
        this.modalClose.next($event);
    }
}
