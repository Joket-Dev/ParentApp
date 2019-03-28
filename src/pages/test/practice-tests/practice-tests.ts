import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuestionsPage} from "../questions/questions";

/**
 * Generated class for the PracticeTestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-practice-tests',
    templateUrl: 'practice-tests.html',
})
export class PracticeTestsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PracticeTestsPage');
    }

    openQuestionsPage() {
      this.navCtrl.push(QuestionsPage);
    }

}
