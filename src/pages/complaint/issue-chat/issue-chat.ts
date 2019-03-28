import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../../notifications/notifications';
/**
 * Generated class for the IssueChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-chat',
  templateUrl: 'issue-chat.html',
})
export class IssueChatPage {
  isLoved = false;
  toggled: boolean = false;
  message: string='';

  handleSelection(event) {
    this.message += event.char;
    this.toggled=false;  
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueChatPage');
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
    this.navCtrl.push(NotificationsPage)
  }

}
