import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ShowcaseProfilePage } from "../showcase-profile/showcase-profile";
import { NotificationsPage } from "../../notifications/notifications";
@Component({
  selector: "page-showcase-details",
  templateUrl: "showcase-details.html"
})
export class ShowcaseDetailsPage {
  isLoved = false;
  toggled: boolean = false;
  message: string = "";

  handleSelection(event) {
    this.message += event.char;
    this.toggled = false;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShowcaseDetailsPage");
  }

  toggleLoved() {
    this.isLoved = !this.isLoved;
  }

  openShowcaseProfilePage() {
    this.navCtrl.push(ShowcaseProfilePage);
  }

  openNotificationsPage() {
    this.navCtrl.push(NotificationsPage);
  }

  changeCommentBox() {
    let textarea: any = document.querySelector("#comment textarea");
    textarea.style.height = "";
    textarea.style.height = Math.min(textarea.scrollHeight) + "px";
  }
}
