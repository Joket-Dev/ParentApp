import { IssueChatPage } from './../issue-chat/issue-chat';
import {Component} from '@angular/core';
import {NavController, NavParams,ModalController} from 'ionic-angular';
import {NewComplaintPage} from "../new-complaint/new-complaint";
import { NotificationsPage } from '../../notifications/notifications';
/**
 * Generated class for the ComplaintListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-complaint-list',
    templateUrl: 'complaint-list.html',
})
export class ComplaintListPage {
    type = 'open';    
    constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ComplaintListPage');
    }

    openNewComplaintPage() {
        this.navCtrl.push(NewComplaintPage);

    }

    openInfo(){
        // const modal = this.modalCtrl.create(
        //     InfoSectionModalComponent,
        //     { type: "Complaint" },
        //     {
        //       showBackdrop: true
        //     }
        //   );
        //   modal.present();
        this.navCtrl.push(IssueChatPage);
    }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }
  
}
