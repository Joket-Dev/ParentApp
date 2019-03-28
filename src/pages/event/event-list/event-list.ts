import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { EventDetailsPage } from "../event-details/event-details";
import { NotificationsPage } from "../../notifications/notifications";
import { EventTabPage } from "../event-tab/event-tab";
/**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-event-list",
  templateUrl: "event-list.html"
})
export class EventListPage {
  eventPastPage:any = EventTabPage;
  eventUpcomingPage:any = EventTabPage;
  type = "upcoming";
  
  public categories: Array<string> = ["upcoming", "Past"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventListPage");
  }

  openEventDetails() {
    this.navCtrl.push(EventDetailsPage);
  }
  // segmentChanged(e){
  //   this.eventList = this.eventList.reverse();
  // }

  // onTabChanged(tabName) {
  //   this.type = tabName;
  //   this.eventList = _.shuffle(this.eventList);
  // }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage);
  }
}
