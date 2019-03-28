import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ExamResultsPage} from "../exam-results/exam-results";
import { NotificationsPage } from '../../notifications/notifications';
import { ExamExamresultDetailPage } from './../exam-examresult-detail/exam-examresult-detail';


@Component({
    selector: 'page-exam-subjects',
    templateUrl: 'exam-subjects.html',
})
export class ExamSubjectsPage {
    subjects:string[]=["English",
    "Tamil",
    "Maths",
    "Science",   
    "Geography"];
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    openExamResultPage() {
        this.navCtrl.push(ExamResultsPage);
    }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }

    openDetail(){
        this.navCtrl.push(ExamExamresultDetailPage);
    }

}
