import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShowcaseCreatePage} from "../showcase-create/showcase-create";
import { NotificationsPage } from '../../notifications/notifications';

/**
 * Generated class for the ShowcaseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-showcase-list',
    templateUrl: 'showcase-list.html',
})
export class ShowcaseListPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ShowcaseListPage');
    }

    openShowcaseCreatePage(){
        this.navCtrl.push(ShowcaseCreatePage);
    }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage)
    }

}
