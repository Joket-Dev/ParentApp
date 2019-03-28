import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {AnswersPage} from "../answers/answers";
import { NotificationsPage } from '../../notifications/notifications';


@Component({
    selector: 'page-questions',
    templateUrl: 'questions.html',
})
export class QuestionsPage {
    @ViewChild('questions') questionsSlider: Slides ;
    showResult = false;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad QuestionsPage');
    }

    nextQues(){
        console.log(this.questionsSlider);
        this.questionsSlider.slideNext();

    }

    prevQues(){
        this.questionsSlider.slidePrev();
    }

    onLastSlide(){
        this.showResult = true;
    }

    openAnswersPage(){
        this.navCtrl.push(AnswersPage);

    }

    openNotificationPage(){
        this.navCtrl.push(NotificationsPage);
    }

}
