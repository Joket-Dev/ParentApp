import { NotificationsPage } from './../notifications/notifications';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment';
import * as _  from 'lodash';
@Component({
    selector: 'page-class-schedule',
    templateUrl: 'class-schedule.html',
})
export class ClassSchedulePage {
    selectedDate = new Date();
    scheduleList:any=[
        {
            subject: 'English',
            starttime : '9:30 AM',
            endtime :'10:30 AM'
        },
        {
            subject: 'Maths',
            starttime : '11:15 AM',
            endtime :'12:30 PM'
        },
        {
            subject: 'Science',
            starttime : '1:30 PM',
            endtime :'2:00 AM'
        },
        {
            subject: 'Social science',
            starttime : '2:30 AM',
            endtime :'3:30 AM'
        },
        {
            subject: 'Sports',
            starttime : '6:30 AM',
            endtime :'7:30 AM'
        },
        {
            subject: 'Physics',
            starttime : '8:30 AM',
            endtime :'9:45 AM'
        },
    ]
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    prevDate() {
        this.selectedDate = moment(this.selectedDate).subtract(1, 'days').toDate();
        this.scheduleList = _.shuffle(this.scheduleList);
    }

    nextDate(){
        this.selectedDate = moment(this.selectedDate).add(1, 'days').toDate();
        this.scheduleList = _.shuffle(this.scheduleList);
    }

    swipeEvent(e) {
        if (e.direction == 2) {
        //  console.log('swiped left');         
          this.nextDate();
        } else if (e.direction == 4) {
        //   console.log('swiped right');   
          this.prevDate();
        }
       
    }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }

}
