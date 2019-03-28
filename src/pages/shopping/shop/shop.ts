import { ShopTabPage } from "./../shop-tab/shop-tab";
import { CheckoutdetailPage } from "./../../checkoutdetail/checkoutdetail";
import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, Events } from "ionic-angular";
import { ShoppingCartPage } from "../shopping-cart/shopping-cart";
import { NotificationsPage } from "../../notifications/notifications";
import { OrdersPage } from "../orders/orders";
// import { OrderDetailPage } from "../order-detail/order-detail";
import { SuperTabsController, SuperTabsComponent } from "ionic2-super-tabs";

@Component({
  selector: "page-shop",
  templateUrl: "shop.html"
})
export class ShopPage {
  @ViewChild(SuperTabsComponent) superTabs: SuperTabsComponent;

  orderdetailPage: any = ShopTabPage;
  ordersPage: any = ShopTabPage;
  public postType = "featured";
  cartCount: number = 0;
  public categories: Array<string> = ["featured", "recent"];
  productList: any[] = [
    {
      name: "Uniform",
      price: "INR 499",
      image: "assets/placeholders/uniform.jpg",
      qty: 0
    },
    {
      name: "Shirt",
      price: "INR 699",
      image: "assets/placeholders/shirt.jpg",
      qty: 0
    },
    {
      name: "Pent",
      price: "INR 699",
      image: "assets/placeholders/pent.jpg",
      qty: 0
    }
  ];
  bookList: any[] = [
    {
      name: "Book1",
      price: "INR 400",
      image: "assets/placeholders/book-cover.jpg",
      qty: 0
    },
    {
      name: "Book2",
      price: "INR 600",
      image: "assets/placeholders/book2.jpg",
      qty: 0
    },
    {
      name: "Book3",
      price: "INR 900",
      image: "assets/placeholders/book3.jpg",
      qty: 0
    }
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public SuperTabsController: SuperTabsController,
    public events: Events
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShopPage");
    this.events.subscribe("update:cartCount", data => {
      this.cartCount = data.data;
    });
  }

  openShoppingCartPage() {
    this.navCtrl.push(ShoppingCartPage);
  }

  onTabChanged(tabName) {
    this.postType = tabName;
  }

  // cartChanged(e) {
  //   this.cartCount = 0;
  //   for (let index = 0; index < this.productList.length; index++) {
  //     this.cartCount = this.cartCount + this.productList[index].qty;
  //   }
  //   for (let index = 0; index < this.bookList.length; index++) {
  //     this.cartCount = this.cartCount + this.bookList[index].qty;
  //   }

  //   // if (e) {
  //   //   this.cartCount++;
  //   // } else {
  //   //   this.cartCount--;
  //   // }
  // }

  openOrdersPage() {
    this.navCtrl.push(OrdersPage);
  }

  openDetailPage() {
    // this.navCtrl.push(OrderDetailPage, { status: "checkout" });
    this.navCtrl.push(CheckoutdetailPage, { status: "checkout" });
  }

  openNotificationsPage() {
    this.navCtrl.push(NotificationsPage);
  }
}
