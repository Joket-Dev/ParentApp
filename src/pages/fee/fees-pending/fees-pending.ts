import { FeesTabPage } from './../fees-tab/fees-tab';
import { NotificationsPage } from './../../notifications/notifications';
import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { ReceiptImagePage } from "../receipt-image/receipt-image";
import { InfoSectionModalComponent } from "./../../../components/info-section/info-section";
@Component({
  selector: "page-fees-pending",
  templateUrl: "fees-pending.html"
})
export class FeesPendingPage {
  feeType = "tution";
  feesTabPage = FeesTabPage;
  public categories: Array<string> = ["tution", "bus", "academic", "festival","other"];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad FeesPendingPage");
  }

  openReceiptImagePage() {
    this.navCtrl.push(ReceiptImagePage);
  }

  onTabChanged(tabName) {
    this.feeType = tabName;
  }

  openInfo() {
    const modal = this.modalCtrl.create(InfoSectionModalComponent, {type:'Pending fee'}, {
      showBackdrop: true
    });
    modal.present();
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage);
  }
}
