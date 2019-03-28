import { ExamExamresultDetailPage } from './../exam-examresult-detail/exam-examresult-detail';
import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {GallaryPage} from './../../gallary/gallary';
import { NotificationsPage } from '../../notifications/notifications';

@Component({
    selector: 'page-exam-results',
    templateUrl: 'exam-results.html',
})
export class ExamResultsPage {
    @ViewChild('slides') slider: Slides;
    subjects:string[]=["English",
        "Tamil",
        "Maths",
        "Science",        
        "Geography"];
    
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
    
    openDetail(){
        this.navCtrl.push(ExamExamresultDetailPage);
    }
}
