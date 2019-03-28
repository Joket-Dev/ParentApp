import { NotificationsPage } from './../notifications/notifications';
import { Component } from "@angular/core";
import { NavController, ToastController, ModalController } from "ionic-angular";
import { SuccessModalComponent } from "./../../components/success-modal/success-modal";
import { UtilServiceProvider } from "./../../providers";
@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public utilServiceProvider: UtilServiceProvider
  ) {}  
  openFileInput() {
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

  fileSelected(e) {
    const toast = this.toastCtrl.create({
      message:
        "Selected " +
        e.target.files.length +
        (e.target.files.length > 1 ? " files." : " file."),
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  submitContactDetail(form: any) {
    const modal = this.modalCtrl.create(SuccessModalComponent, null, {
      showBackdrop: true
    });
    modal.present();
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage)
  }
}
