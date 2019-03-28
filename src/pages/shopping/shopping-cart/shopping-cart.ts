import { CheckoutdetailPage } from './../../checkoutdetail/checkoutdetail';
import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { NotificationsPage } from "../../notifications/notifications";

/**
 * Generated class for the ShoppingCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-shopping-cart",
  templateUrl: "shopping-cart.html"
})
export class ShoppingCartPage {
  cartItems: any[] = [
    {
      name: "Uniform",
      price: "INR 499",
      image: "assets/placeholders/uniform.jpg",
      qty:1
    },
    {
      name: "Shirt",
      price: "INR 699",
      image: "assets/placeholders/shirt.jpg",
      qty:1
    },   
    {
      name: "Uniform",
      price: "INR 400",
      image: "assets/placeholders/book-cover.jpg",
      qty:1
    },
    {
      name: "Shirt",
      price: "INR 600",
      image: "assets/placeholders/book2.jpg",
      qty:1
    },
    {
      name: "Pent",
      price: "INR 900",
      image: "assets/placeholders/book3.jpg",
      qty:1
    }
  ];
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShoppingCartPage");
  }

  cartChanged(e, index) {
    if (!e) {
      this.cartItems.splice(index, 1);
      this.toastCtrl
        .create({
          duration: 2000,
          position: "top",
          message: "Removed item Successfully."
        })
        .present();
    }
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage)
  }

  openDetailPage() {
    this.navCtrl.push(CheckoutdetailPage, { status: "checkout" });
  }
}
