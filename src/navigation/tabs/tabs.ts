import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {DashboardPage} from "../../pages/dashboard/dashboard";
import {ContactPage} from "../../pages/contact/contact";
import {ClassSchedulePage} from "../../pages/class-schedule/class-schedule";
import {PracticeTestsPage} from "../../pages/test/practice-tests/practice-tests";
import {TodoListPage} from "../../pages/todo-list/todo-list";
import {FeeTypesPage} from "../../pages/fee/fee-types/fee-types";
import {EventListPage} from "../../pages/event/event-list/event-list";
import {ShowcaseListPage} from "../../pages/showcase/showcase-list/showcase-list";
import {ShopPage} from "../../pages/shopping/shop/shop";
import {ExamSubjectsPage} from "../../pages/exam/exam-subjects/exam-subjects";
import {ForumPostsPage} from "../../pages/forum/forum-posts/forum-posts";
import {ProgressReportPage} from "../../pages/progress-report/progress-report";
import {LibraryPage} from "../../pages/book/library/library";
import {HomeWorkPage} from "../../pages/home-work/home-work";
import { TrackPage } from '../../pages/track/track';


@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1Root: any = TrackPage;
    tab2Root: any = ShopPage;
    tab3Root: any = DashboardPage;
    tab4Root: any = ForumPostsPage;
    tab5Root: any = ContactPage;

    classScheduleTab = ClassSchedulePage;
    PracticeTestsTab = PracticeTestsPage;
    TodoListTab = TodoListPage;
    FeesTab = FeeTypesPage;
    EventsTab = EventListPage;
    showcaseListPage = ShowcaseListPage;
    ExamSubjectsPage = ExamSubjectsPage;
    ProgressReportsPage = ProgressReportPage;
    LibraryPage = LibraryPage;
    HomeworkPage = HomeWorkPage;



    selectedTabIndex: number = 2;

    constructor(public navParams: NavParams) {

        this.selectedTabIndex = navParams.data.tabIndex || 2;
    }

}
