import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FeesPendingPage} from "../fees-pending/fees-pending";
import {FeesPaidPage} from "../fees-paid/fees-paid";
import {ComplaintListPage} from "../../complaint/complaint-list/complaint-list";
import { NotificationsPage } from '../../notifications/notifications';

/**
 * Generated class for the FeeTypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-fee-types',
    templateUrl: 'fee-types.html',
})
export class FeeTypesPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FeeTypesPage');
    }

    openPendingFeesPage() {
        this.navCtrl.push(FeesPendingPage);
    }

    openPaidFeesPage(){
        this.navCtrl.push(FeesPaidPage);
    }

    openComplaintListPage(){
        this.navCtrl.push(ComplaintListPage);
    }
    
    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }

}
