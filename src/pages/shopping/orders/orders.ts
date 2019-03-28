import { NotificationsPage } from "./../../notifications/notifications";
// import { OrderDetailPage } from "../order-detail/order-detail";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
// import * as _ from "lodash";
import { OrdersTabPage } from "../orders-tab/orders-tab";

@Component({
  selector: "page-orders",
  templateUrl: "orders.html"
})
export class OrdersPage {
  type = "all";
  ordersTabPage: any = OrdersTabPage;
  // productList: any[] = [
  //   {
  //     name: "Uniform",
  //     o_date: "10/10/2019 ",
  //     d_date: "10/10/2019",
  //     image: "assets/placeholders/uniform.jpg"
  //   },
  //   {
  //     name: "Shirt",
  //     o_date: "9/10/2019",
  //     d_date: "10/10/2019",
  //     image: "assets/placeholders/shirt.jpg"
  //   },
  //   {
  //     name: "Pent",
  //     o_date: "7/9/2019",
  //     d_date: "8/09/2019",
  //     image: "assets/placeholders/pent.jpg"
  //   },
  //   {
  //     name: "Mourse",
  //     o_date: "9/9/2019",
  //     d_date: "12/09/2019",
  //     image: "assets/imgs/placeholder-img-kid.jpg"
  //   }
  // ];
  categories = ["all", "pending", "refunded", "completed", "cancelled"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrdersPage");
  }

  // segmentChanged(e) {
  //   this.productList = _.shuffle(this.productList);
  // }

  openNotificationsPage() {
    this.navCtrl.push(NotificationsPage);
  }

  onTabChanged(tabName) {
    this.type = tabName;
  }

  // openInfo() {
  //   this.navCtrl.push(OrderDetailPage, { status: this.type });
  // }
}
