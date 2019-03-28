import {Component} from '@angular/core';
import {ShowcaseDetailsPage} from "../showcase-details/showcase-details";
import {NavController} from "ionic-angular";

@Component({
    selector: 'showcase-item',
    templateUrl: 'showcase-item.html'
})
export class ShowcaseItemComponent {
    isLoved = true;

    constructor(private navCtrl: NavController) {

    }

    toggleLoved() {
        this.isLoved = !this.isLoved;
    }

    openShowcaseDetailsPage() {
        this.navCtrl.push(ShowcaseDetailsPage);

    }


}
