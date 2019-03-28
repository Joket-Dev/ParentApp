import { NotificationsPage } from './../../notifications/notifications';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BorrowedBooksPage} from "../borrowed-books/borrowed-books";
@Component({
    selector: 'page-library',
    templateUrl: 'library.html',
})
export class LibraryPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    openBorrowedBooksPage() {
        this.navCtrl.push(BorrowedBooksPage);
    }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }  

}
