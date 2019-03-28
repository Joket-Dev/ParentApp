import { NotificationsPage } from './../../notifications/notifications';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the BorrowedBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-borrowed-books',
  templateUrl: 'borrowed-books.html',
})
export class BorrowedBooksPage {
  bookList: any = [
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
      replies: "Returned",
      time: "5:14 pm",
      created_by: "Curt"
    },
    {
      author: "Smith",
      title: "Who is your favorite actor?",
      replies: "Returned - Damaged",
      time: "10:24 pm",
      created_by: "Warner"
    },
    {
      author: "Gills",
      title: "How much you slept?",
      replies: "Damaged",
      time: "9:14 pm",
      created_by: "Ponting"
    },
    {
      author: "Dhoni",
      title: "Which cricker you like most?",
      replies: "Not Returned - Beyond Due date",
      time: "5:22 pm",
      created_by: "Peter"
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowedBooksPage');
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage);
}  
}
