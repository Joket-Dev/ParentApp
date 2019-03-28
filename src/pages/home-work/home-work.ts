import { NotificationsPage } from './../notifications/notifications';
import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import { GallaryPage } from './../gallary/gallary';

@Component({
    selector: 'page-home-work',
    templateUrl: 'home-work.html',
})
export class HomeWorkPage {
    @ViewChild('slides') slider: Slides;
    subjects:any[]=['English','Maths','Science','Networking','Programming'];
    selectedIndex:number = 0;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    nextSlide() {
        if(this.selectedIndex < this.subjects.length-1){
            this.selectedIndex++;
            this.slider.slideNext();
        }            
    }

    prevSlide() {
        if(this.selectedIndex > 0){
            this.selectedIndex--;
            this.slider.slidePrev();
        }            
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

    slideChanged() {
        this.selectedIndex = this.slider.getActiveIndex();
      }

}
