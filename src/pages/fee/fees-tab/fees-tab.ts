import { InfoSectionModalComponent } from "./../../../components/info-section/info-section";
import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";

@Component({
  selector: "page-fees-tab",
  templateUrl: "fees-tab.html"
})
export class FeesTabPage {
  feeType = "tution";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad FeesTabPage");
    this.feeType = this.navParams.get('page');
  }

  openInfo() {
    const modal = this.modalCtrl.create(
      InfoSectionModalComponent,
      { type: "Pending fee" },
      {
        showBackdrop: true
      }
    );
    modal.present();
  }
}
