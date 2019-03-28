import { Component } from "@angular/core";
import { NavController, NavParams, App } from "ionic-angular";
import { EventDetailsPage } from "../event-details/event-details";
import * as _ from "lodash";
@Component({
  selector: "page-event-tab",
  templateUrl: "event-tab.html"
})
export class EventTabPage {
  eventList: any = [
    {
      author: "Cher",
      title: "Which album you are listening now?",
      replies: "3",
      time: "3:14 pm",
      created_by: "James"
    },
    {
      author: "Cristian",
      title: "Which musician you like most?",
      replies: "123",
      time: "5:14 pm",
      created_by: "Curt"
    },
    {
      author: "Smith",
      title: "Who is your favorite actor?",
      replies: "500",
      time: "10:24 pm",
      created_by: "Warner"
    },
    {
      author: "Gills",
      title: "How much you slept?",
      replies: "20",
      time: "9:14 pm",
      created_by: "Ponting"
    },
    {
      author: "Dhoni",
      title: "Which cricker you like most?",
      replies: "25",
      time: "5:22 pm",
      created_by: "Peter"
    }
  ];
  constructor(
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.eventList = _.shuffle(this.eventList);
  }

  openEventDetails() {
    // this.navCtrl.push(EventDetailsPage);
    this.app.getRootNav().push(EventDetailsPage);
  }
}
