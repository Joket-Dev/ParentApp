import { FeesTabPage } from './../fees-tab/fees-tab';
import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { InfoSectionModalComponent } from "./../../../components/info-section/info-section";
import { NotificationsPage } from "../../notifications/notifications";

/**
 * Generated class for the FeesPaidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-fees-paid",
  templateUrl: "fees-paid.html"
})
export class FeesPaidPage {
  feeType = "tution";
  feesTabPage = FeesTabPage;
  public categories: Array<string> = ["tution", "bus", "academic", "festival","other"];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad FeesPaidPage");
  }

  openInfo() {
    const modal = this.modalCtrl.create(
      InfoSectionModalComponent,
      { type: "Paid fee" },
      {
        showBackdrop: true
      }
    );
    modal.present();
  }

  onTabChanged(tabName) {
    this.feeType = tabName;
  }

  openNotificationsPage() {
    this.navCtrl.push(NotificationsPage);
  }
}
