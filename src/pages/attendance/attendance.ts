import { NotificationsPage } from './../notifications/notifications';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
// import {DayInfo} from "simple-angular-calendar";
import * as moment from 'moment';
import {ClassSchedulePage} from "../class-schedule/class-schedule";
import {TodoListPage} from "../todo-list/todo-list";
import {LeaveApplicationPage} from "../leave-application/leave-application";
@Component({
    selector: 'page-attendance',
    templateUrl: 'attendance.html',
})
export class AttendancePage {
    progressConfig = {
        color: '#fe6f3d',
        stroke: 2,
        radius: 40
    };

    showProgress = true;

    selectedDate = new Date();

    attendances = [
        {
            date: new Date('1 jan 2019'),
            status: 'A'
        },
        {
            date: new Date('15 jan 2019'),
            status: 'A'
        },
        {
            date: new Date('25 Jan 2019'),
            status: 'L'
        },
        {
            date: new Date('10 Jan 2019'),
            status: 'L'
        },
        {
            date: new Date('22 Jan 2019'),
            status: 'L'
        },

    ];

    attendanceMap = {};

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.attendances.forEach(att => {
           this.attendanceMap[moment(att.date).startOf('day').format('x')] = att.status;
        });
       // console.log(this.attendanceMap);

    }

    dayClicked(date: Date){
        console.log(date);
        this.showProgress = false;
    }

    openClassSchedulePage(){
        this.navCtrl.push(ClassSchedulePage);
    }

    openTodoListPage(){
        this.navCtrl.push(TodoListPage);
    }

    openApplyForLeavePage(){
        this.navCtrl.push(LeaveApplicationPage);
    }

    isAbsentDay(day){
        if (day) {
            return this.getDayStatus(day) === 'A';
        }
        return false;
    }

    isLeaveDay(day){
        if (day) {
            return this.getDayStatus(day) === 'L';
        }
        return false;
    }

    isHoliday(day){
        //console.log(day);
        if (day) {
            const dayIndex = day.date.getDay();

            return dayIndex === 6 || dayIndex === 0;
        }
    }

    isHolidayCaption(dayOfWeek){
        return dayOfWeek === 'Sa' || dayOfWeek === 'Su';
    }

    getDayStatus(day){
        const timestamp = moment(day.date).startOf('day').format('x');
        return this.attendanceMap[timestamp];
    }

    prevMonth(){
        const firstDayOfPrevMonth = moment(this.selectedDate).subtract(1, 'months').startOf('month').toDate();
        this.selectedDate = firstDayOfPrevMonth;
    }

    nextMonth(){
        const firstDayOfNextMonth = moment(this.selectedDate).add(1, 'months').startOf('month').toDate();
        this.selectedDate = firstDayOfNextMonth;
    }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }  

}
