import { Component } from "@angular/core";
import { Events, NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-shop-tab",
  templateUrl: "shop-tab.html"
})
export class ShopTabPage {
  cartCount: number = 0;
  postType = 'Uniform';
  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events) {}

  ionViewDidLoad() {
    this.postType = this.navParams.get('page');
  }

  ionViewWillEnter() {
  }

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

  cartChanged(e) {
    this.cartCount = 0;
    for (let index = 0; index < this.productList.length; index++) {
      this.cartCount = this.cartCount + this.productList[index].qty;
    }
    for (let index = 0; index < this.bookList.length; index++) {
      this.cartCount = this.cartCount + this.bookList[index].qty;
    }

    this.events.publish('update:cartCount',{data:this.cartCount});

    // if (e) {
    //   this.cartCount++;
    // } else {
    //   this.cartCount--;
    // }
  }
}
