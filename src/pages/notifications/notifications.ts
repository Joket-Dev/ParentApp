import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ModalController,
  AlertController
} from "ionic-angular";
import { InfoSectionModalComponent } from "./../../components/info-section/info-section";

@Component({
  selector: "page-notifications",
  templateUrl: "notifications.html"
})
export class NotificationsPage {
  public user: string[] = [
    "Adam moore",
    "John carter",
    "Adam rocky",
    "Ponting steve",
    "John carter"
  ];
  public times: string[] = ["1 min", "10 min", "1 hr", "2 hr", "8 hr", "1 day"];
  public texts = [
    "Keep the kids happy this summer with free entry whole of August",
    "No more running out of the office at 4pm until 8pm",
    "All your favourite books at your reach!",
    "Be the first to know about discounts",
    "usan from Private Real Estate will show you the property on Thursday at 2pm.",
    "You are invited to the interview at PY Finance at 10am this Wednesday."
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad NotificationsPage");
  }

  openInfo(e) {
    const modal = this.modalCtrl.create(
      InfoSectionModalComponent,
      { type: "Notification" },
      {
        showBackdrop: true
      }
    );
    modal.present();
  }

  openConfirmationBox($event, message, index) {
    if ($event) $event.stopPropagation();
    let alert = this.alertCtrl.create({
      title: "Confirmation",
      message: message,
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
            if (typeof index == "number") {
              this.texts.splice(index, 1);
            } else {
              this.texts = [];
            }
          }
        }
      ]
    });
    alert.present();
  }
}
