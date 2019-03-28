import { ForumTabPage } from './../forum-tab/forum-tab';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ForumPostCreatePage} from "../forum-post-create/forum-post-create";
import { NotificationsPage } from '../../notifications/notifications';


@Component({
    selector: 'page-forum-posts',
    templateUrl: 'forum-posts.html',
})
export class ForumPostsPage {
    postType = 'featured';
    forumsTabPage:any= ForumTabPage;
    public categories: Array<string> = ["featured", "recent", "educational", "festival","other"];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }


    openForumPostCreatePage() {
        this.navCtrl.push(ForumPostCreatePage);

    }

    onTabChanged(tabName) {
        this.postType = tabName;
      }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage)
    }
}
