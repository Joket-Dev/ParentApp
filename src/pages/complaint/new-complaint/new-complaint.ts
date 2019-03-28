import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ToastController,
  ModalController
} from "ionic-angular";
import { SuccessModalComponent } from "./../../../components/success-modal/success-modal";
import { UtilServiceProvider } from "./../../../providers";
import { NotificationsPage } from "../../notifications/notifications";

/**
 * Generated class for the NewComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-new-complaint",
  templateUrl: "new-complaint.html"
})
export class NewComplaintPage {
  public utilServiceProvider: UtilServiceProvider;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewComplaintPage");
  }

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

  docSelected(e) {
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

  submitComplaint(form: any) {
    const modal = this.modalCtrl.create(SuccessModalComponent, null, {
      showBackdrop: true
    });
    modal.present();
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage);
  }
}
