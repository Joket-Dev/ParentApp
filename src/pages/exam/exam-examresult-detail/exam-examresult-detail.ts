import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {GallaryPage} from './../../gallary/gallary';
import { NotificationsPage } from '../../notifications/notifications';

@Component({
  selector: 'page-exam-examresult-detail',
  templateUrl: 'exam-examresult-detail.html',
})
export class ExamExamresultDetailPage {

  @ViewChild('slides') slider: Slides;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    nextSlide() {
        this.slider.slideNext();
    }

    prevSlide() {
        this.slider.slidePrev();
    }

    getSliderLength() {
        if (this.slider && this.slider._slides) {
            return this.slider._slides.length;
        }

        return 0;
    }

    openGallary(){
        this.navCtrl.push(GallaryPage);
        
    }
    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }

}
