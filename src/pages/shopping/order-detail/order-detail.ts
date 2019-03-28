import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  ModalController
} from "ionic-angular";
import { SuccessModalComponent } from "./../../../components/success-modal/success-modal";

@Component({
  selector: "page-order-detail",
  templateUrl: "order-detail.html"
})
export class OrderDetailPage {
  type = "Completed";
  selection = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
    this.type = navParams.get("status");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderDetailPage");
  }

  openNotificationsPage() {
    this.navCtrl.push(OrderDetailPage);
  }
  openConfirmation(type, message?: any) {
    let str = "";
    if (type == "all" || type == "refunded") {
      str = "take refund";
    } else if (type == "completed") {
      str = "return";
    } else if (type == "checkout") {
      str = "cancel order";
    }
    let alert = this.alertCtrl.create({
      title: "Confirmation",
      message: "Are you want to " + str + "?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            const modal = this.modalCtrl.create(SuccessModalComponent, null, {
              showBackdrop: true
            });
            modal.present();
          }
        }
      ]
    });
    alert.present();
  }

  changeOption(selection) {
    this.openConfirmation(selection);
  }
}
