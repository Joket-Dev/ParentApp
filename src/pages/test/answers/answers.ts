import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the AnswersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-answers',
    templateUrl: 'answers.html',
})
export class AnswersPage {
    @ViewChild('questionSlides') questionSlides: Slides;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AnswersPage');
    }

    nextSlide(){
        this.questionSlides.slideNext();
    }

    prevSlide(){
        this.questionSlides.slidePrev();
    }

}
