import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { SuccessModalComponent } from './../../components/success-modal/success-modal';
import { UtilServiceProvider } from "./../../providers";
import { NotificationsPage } from '../notifications/notifications';

/**
 * Generated class for the LeaveApplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-leave-application',
  templateUrl: 'leave-application.html',
})
export class LeaveApplicationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController,public utilServiceProvider: UtilServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveApplicationPage');
  }

    openFileInput(){
      this.utilServiceProvider.openImageActionSheet(callback => {
        switch (callback) {
          case 1:
            let element: HTMLElement = document.querySelector(
              "#contact_files"
            ) as HTMLElement;
            if (element) element.click();
            break;
          case 2:
              this.utilServiceProvider.openCamera();
          default:
            break;
        }
      });
  }

  docSelected(e){
      const toast = this.toastCtrl.create({
        message: 'Selected '+ e.target.files.length + (e.target.files.length > 1 ? ' files.' : ' file.'),
        duration: 2000,
        position: 'top'
      });        
      toast.present();
  }

  submitLeave (form:any) {
      const modal = this.modalCtrl.create(SuccessModalComponent,null,{showBackdrop:true});
      modal.present();
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage);
  }
}
