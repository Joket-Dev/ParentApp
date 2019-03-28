import {Component} from '@angular/core';
import {Platform,Events} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
// import {AttendancePage} from "../pages/attendance/attendance";
import {MenuPage} from "../navigation/menu/menu";
// import {ExamSubjectsPage} from "../pages/exam/exam-subjects/exam-subjects";
// import {ClassSchedulePage} from "../pages/class-schedule/class-schedule";
// import {FeesPaidPage} from "../pages/fee/fees-paid/fees-paid";
// import {SuccessModalComponent} from "../components/success-modal/success-modal";
// import {LeaveApplicationPage} from "../pages/leave-application/leave-application";
// import {LoginPage} from "../pages/auth/login/login";
// declare var window: any;

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = MenuPage;


    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events:Events) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // window.addEventListener('keyboardDidShow', (ev) => {
            //     this.events.publish('keyboard:event', {
            //       isOpen: true
            //     });
            //   });
      
            //   window.addEventListener('keyboardDidHide', () => {
            //     this.events.publish('keyboard:event', {
            //       isOpen: false
            //     })
            //   });
        });
    }
}
