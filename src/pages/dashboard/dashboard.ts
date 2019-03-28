// import { EmptyPage } from './../empty/empty';
import { FeeTypesPage } from './../fee/fee-types/fee-types';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AttendancePage} from "../attendance/attendance";
import {HomeWorkPage} from "../home-work/home-work";
import {PracticeTestsPage} from "../test/practice-tests/practice-tests";
// import {ExamSubjectsPage} from "../exam/exam-subjects/exam-subjects";
import {ProgressReportPage} from "../progress-report/progress-report";
import {ExamResultsPage} from "../exam/exam-results/exam-results";
import {LibraryPage} from "../../pages/book/library/library";
import {ClassSchedulePage} from "../../pages/class-schedule/class-schedule";
import {TodoListPage} from "../../pages/todo-list/todo-list";
import {EventListPage} from "../../pages/event/event-list/event-list";
import {NotificationsPage} from "../../pages/notifications/notifications";

const checkinPrefixes = {
    'day' : 'Daily',
    'week' : 'Weekly',
    'month' : 'Monthly',
    'year' : 'Yearly'
};

@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.html',
})
export class DashboardPage {

    checkinPeriod = 'day';
    checkinPrefix = 'Daily';
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }


    checkinPeriodChanged() {
        console.log(this.checkinPeriod);
        this.checkinPrefix = checkinPrefixes[this.checkinPeriod];
    }

    openAttendancePage(){
        this.navCtrl.push(AttendancePage);
    }

    openProgerssReportPage(){
        this.navCtrl.push(ProgressReportPage);
    }

    openExamResultsPage(){
        this.navCtrl.push(ExamResultsPage);
    }

    openFeesPage(){
        this.navCtrl.push(FeeTypesPage);
    }

    openHomeWorkPage(){
        this.navCtrl.push(HomeWorkPage);
    }

    openPracrisetestPage(){
        this.navCtrl.push(PracticeTestsPage);
    }

    openLibraryPage(){
        this.navCtrl.push(LibraryPage);
    }
    
    openClassSchedulePage(){
        this.navCtrl.push(ClassSchedulePage);
    }

    openTodoListPage(){
        this.navCtrl.push(TodoListPage);
    }

    openAssignmentsPage(){
        this.navCtrl.push(HomeWorkPage);
    }

    openEventsPage(){
        this.navCtrl.push(EventListPage);
    }
    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }

}
