import { OrderDetailPage } from './../shopping/order-detail/order-detail';
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { NotificationsPage } from "../notifications/notifications";

@Component({
  selector: "page-checkoutdetail",
  templateUrl: "checkoutdetail.html"
})
export class CheckoutdetailPage {
  isSchool:boolean;
  isPaytm:boolean;
  cartList: any[] = [
    {
      name: "Uniform",
      price: "49.00",
      image: "assets/placeholders/uniform.jpg",
      qty: 0
    },
    {
      name: "Shirt",
      price: "66.00",
      image: "assets/placeholders/shirt.jpg",
      qty: 0
    },
    {
      name: "Pent",
      price: "69.00",
      image: "assets/placeholders/pent.jpg",
      qty: 0
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CheckoutdetailPage");
  }

  openNotificationsPage() {
    this.navCtrl.push(NotificationsPage);
  }

  pay(){
     this.navCtrl.push(OrderDetailPage, { status: "checkout" });
  }
}
