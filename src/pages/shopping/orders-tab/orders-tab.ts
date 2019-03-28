import { Component } from "@angular/core";
import { NavController, NavParams, App } from "ionic-angular";
import * as _ from "lodash";
import { OrderDetailPage } from "../order-detail/order-detail";

@Component({
  selector: "page-orders-tab",
  templateUrl: "orders-tab.html"
})
export class OrdersTabPage {
  type = "all";

  productList: any[] = [
    {
      name: "Uniform",
      o_date: "10/10/2019 ",
      d_date: "10/10/2019",
      image: "assets/placeholders/uniform.jpg"
    },
    {
      name: "Shirt",
      o_date: "9/10/2019",
      d_date: "10/10/2019",
      image: "assets/placeholders/shirt.jpg"
    },
    {
      name: "Pent",
      o_date: "7/9/2019",
      d_date: "8/09/2019",
      image: "assets/placeholders/pent.jpg"
    },
    {
      name: "Mourse",
      o_date: "9/9/2019",
      d_date: "12/09/2019",
      image: "assets/imgs/placeholder-img-kid.jpg"
    }
  ];
  categories = ["all", "pending", "refunded", "completed", "cancelled"];

  constructor(
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.productList = _.shuffle(this.productList);
    this.type = this.navParams.get("page");
  }

  segmentChanged(e) {}

  onTabChanged(tabName) {
    this.type = tabName;
  }

  openInfo() {
    // this.navCtrl.push(OrderDetailPage, { status: this.type });
    this.app.getRootNav().push(OrderDetailPage, { status: this.type });
  }
}
