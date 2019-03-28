import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {LoginPage} from "../../pages/auth/login/login";
import {FeeTypesPage} from "../../pages/fee/fee-types/fee-types";
import {DashboardPage} from "../../pages/dashboard/dashboard";
// import {ContactPage} from "../../pages/contact/contact";
import {ClassSchedulePage} from "../../pages/class-schedule/class-schedule";
import {PracticeTestsPage} from "../../pages/test/practice-tests/practice-tests";
import {TodoListPage} from "../../pages/todo-list/todo-list";
import {EventListPage} from "../../pages/event/event-list/event-list";
import {ShowcaseListPage} from "../../pages/showcase/showcase-list/showcase-list";
import {ExamSubjectsPage} from "../../pages/exam/exam-subjects/exam-subjects";
import {ProgressReportPage} from "../../pages/progress-report/progress-report";
import {LibraryPage} from "../../pages/book/library/library";
import {HomeWorkPage} from "../../pages/home-work/home-work";


interface IPage {
    title: string;
    component: any;
    icon: string;
    tabComponent?: any;
    index?: number;
    data?: any;
}

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
    profilePicUrl: string = 'assets/imgs/face-placeholder.png';

    @ViewChild(Nav) nav: Nav;

    rootPage: any = TabsPage;

    pages: Array<IPage>;

    constructor(navParams: NavParams,
                private navCtrl: NavController,) {

        this.pages = [
            //tabs pages
            // { title: 'Track', component: TabsPage, tabComponent: DashboardPage, icon: 'md-apps', index: 0 },
            // { title: 'Shop', component: TabsPage, tabComponent: DashboardPage, icon: 'md-apps', index: 1 },
            { title: 'Home', component: TabsPage, tabComponent: DashboardPage, icon: 'md-home', index: 2 },
            // { title: 'Forum', component: TabsPage, tabComponent: DashboardPage, icon: 'md-chatbubbles', index: 3 },
            // { title: 'Contact', component: TabsPage, tabComponent: ContactPage, icon: 'md-mail', index: 4 },
            //Menu pages
            { title: 'Class Schedule', component: TabsPage, tabComponent: ClassSchedulePage, icon: 'ios-calendar-outline',  index: 5 },
            { title: 'Practice Test', component: TabsPage, tabComponent: PracticeTestsPage, icon: 'ios-create-outline', index: 6 },
            { title: 'Todo List', component: TabsPage, tabComponent: TodoListPage, icon: 'ios-list-outline', index: 7 },
            { title: 'Fees', component: TabsPage, tabComponent: FeeTypesPage, icon: 'ios-cash-outline',  index: 8  },
            { title: 'Events',component: TabsPage, tabComponent: EventListPage, icon: 'ios-color-palette-outline', index: 9 },
            { title: 'Talent Showcase',component: TabsPage, tabComponent: ShowcaseListPage, icon: 'ios-bulb-outline', index: 10 },
            { title: 'Exam Result',component: TabsPage, tabComponent: ExamSubjectsPage, icon: 'ios-clipboard-outline', index: 11 },
            { title: 'Progress Reports',component: TabsPage, tabComponent: ProgressReportPage, icon: 'ios-stats-outline', index: 12 },
            { title: 'Library',component: TabsPage, tabComponent: LibraryPage, icon: 'ios-book-outline', index: 13 },
            { title: 'Home Work',component: TabsPage, tabComponent: HomeWorkPage, icon: 'ios-brush-outline', index: 14 },

        ];

    }

    logout() {
        this.navCtrl.setRoot(LoginPage);
    }


    openPage(page: IPage) {
        let params = {};

        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }

        if(page.data) {
            params = Object.assign(params, {data: page.data});
        }

        //console.log(this.nav.getActiveChildNavs());

        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {

            this.nav.getActiveChildNavs()[0].select(page.index);

        } else {
            // Tabs are not active, so reset the root page
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.component, params);
        }
    }


    isActive(page: IPage) {
        // Again the Tabs Navigation
        let childNav = this.nav.getActiveChildNavs()[0];

        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }

        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.component) {
            return 'primary';
        }
        return;
    }


}
