import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";


@Component({
  selector: "page-forum-tab",
  templateUrl: "forum-tab.html"
})
export class ForumTabPage {
  postType = "featured";
  forumsTabPage: any = ForumTabPage;
  public categories: Array<string> = [
    "featured",
    "recent",
    "educational",
    "festival",
    "other"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ForumTabPage");
    this.postType = this.navParams.get("page");
  }
}
