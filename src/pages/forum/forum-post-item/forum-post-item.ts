import { Component, Input } from "@angular/core";
import { App } from "ionic-angular";
import { ForumPostDetailsPage } from "../forum-post-details/forum-post-details";

@Component({
  selector: "forum-post-item",
  templateUrl: "forum-post-item.html"
})
export class ForumPostItemComponent {
  @Input("FormType")
  FormType: string = "";

  isLoved = true;

  constructor(public app: App) {}

  toggleLoved() {
    this.isLoved = !this.isLoved;
  }

  openForumPostDetailsPage() {
    // this.navCtrl.push(ForumPostDetailsPage);
    this.app.getRootNav().push(ForumPostDetailsPage);
  }
}
