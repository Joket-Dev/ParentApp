import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams,Slides } from "ionic-angular";
import * as $ from "jquery";
import 'slick-carousel/slick/slick';
import { NotificationsPage } from "../../notifications/notifications";
import { ShowcaseProfilePage } from "../../showcase/showcase-profile/showcase-profile";

@Component({
  selector: "page-forum-post-details",
  templateUrl: "forum-post-details.html"
})
export class ForumPostDetailsPage {
  @ViewChild('slides') slides:Slides;
  isLoved = false;
  toggled: boolean = false;
  message: string='';
   
  handleSelection(event) {
      this.message += event.char;
      this.toggled=false;  
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad(){
    $('.forum-images').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,       
      });
  }

  toggleLoved() {
    this.isLoved = !this.isLoved;
  }

  changeCommentBox() {
    let textarea:any = document.querySelector("#comment textarea");
    textarea.style.height = "";
    textarea.style.height = Math.min(textarea.scrollHeight) + "px";
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage);
  }

  stopSliding(e){
    this.slides.lockSwipes(true);
  }

  startSliding(e){
    this.slides.lockSwipes(false);
  }

  openShowcaseProfilePage(){
    this.navCtrl.push(ShowcaseProfilePage);
  }
  
}
