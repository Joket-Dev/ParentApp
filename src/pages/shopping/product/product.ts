import { Component, Input, EventEmitter, Output } from "@angular/core";
import { GallaryPage } from "./../../gallary/gallary";
import { NavController, NavParams, AlertController } from "ionic-angular";

@Component({
  selector: "product",
  templateUrl: "product.html"
})
export class ProductComponent {
  @Input('data') data:any = {};
  @Input() isInCart = false;
  @Input() cartList = false;
  qty: number = 1;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ) {}
  @Output() valueChange = new EventEmitter();
  
  addToCart() {
    this.isInCart = true;
    this.valueChanged(this.isInCart);
  }

  removeFromCart() {
    let alert = this.alertCtrl.create({
      title: "Confirmation",
      message: "Sure you want to remove from cart?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            this.isInCart = false;
            this.valueChanged(this.isInCart);
          }
        }
      ]
    });
    alert.present();
  }

  openGallary() {
    this.navCtrl.push(GallaryPage, { from: "products" });
  }

  valueChanged(value) { 
    this.valueChange.emit(this.data);
  }
}
