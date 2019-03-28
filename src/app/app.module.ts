import { ForumTabPage } from './../pages/forum/forum-tab/forum-tab';
import { OrdersTabPage } from './../pages/shopping/orders-tab/orders-tab';
import { FeesTabPage } from './../pages/fee/fees-tab/fees-tab';
import { EventTabPage } from './../pages/event/event-tab/event-tab';
import { ShopTabPage } from './../pages/shopping/shop-tab/shop-tab';
import { OrdersPage } from './../pages/shopping/orders/orders';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {FormsModule} from '@angular/forms';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TodoListPage} from "../pages/todo-list/todo-list";
import {LoginPage} from "../pages/auth/login/login";
import {SendOtpPage} from "../pages/auth/send-otp/send-otp";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {ClassSchedulePage} from "../pages/class-schedule/class-schedule";
import {NewComplaintPage} from "../pages/complaint/new-complaint/new-complaint";
import {ComplaintListPage} from "../pages/complaint/complaint-list/complaint-list";
import {FeeTypesPage} from "../pages/fee/fee-types/fee-types";
import {FeesPendingPage} from "../pages/fee/fees-pending/fees-pending";
import {FeesPaidPage} from "../pages/fee/fees-paid/fees-paid";
import {MenuPage} from "../navigation/menu/menu";
import {TabsPage} from "../navigation/tabs/tabs";
import {PracticeTestsPage} from "../pages/test/practice-tests/practice-tests";
import {EventListPage} from "../pages/event/event-list/event-list";
import {EventDetailsPage} from "../pages/event/event-details/event-details";
import {LeaveApplicationPage} from "../pages/leave-application/leave-application";
import {ReceiptImagePage} from "../pages/fee/receipt-image/receipt-image";
import {QuestionsPage} from "../pages/test/questions/questions";
import {AnswersPage} from "../pages/test/answers/answers";
import {ShowcaseListPage} from "../pages/showcase/showcase-list/showcase-list";
import {ShowcaseDetailsPage} from "../pages/showcase/showcase-details/showcase-details";
import {ShowcaseCreatePage} from "../pages/showcase/showcase-create/showcase-create";
import {ShowcaseProfilePage} from "../pages/showcase/showcase-profile/showcase-profile";
import {ShowcaseItemComponent} from "../pages/showcase/showcase-item/showcase-item";
import {ShopPage} from "../pages/shopping/shop/shop";
import {ProductComponent} from "../pages/shopping/product/product";
import {RoundProgressModule} from "angular-svg-round-progressbar";
import {CircularPercentagesComponent} from "../components/circular-percentages/circular-percentages";
import {ShoppingCartPage} from "../pages/shopping/shopping-cart/shopping-cart";
import {IssueChatPage} from "../pages/complaint/issue-chat/issue-chat";
import {ForumPostsPage} from "../pages/forum/forum-posts/forum-posts";
import {ForumPostCreatePage} from "../pages/forum/forum-post-create/forum-post-create";
import {ForumPostDetailsPage} from "../pages/forum/forum-post-details/forum-post-details";
import {ForumPostItemComponent} from "../pages/forum/forum-post-item/forum-post-item";
import {ExamResultsPage} from "../pages/exam/exam-results/exam-results";
import {ExamSubjectsPage} from "../pages/exam/exam-subjects/exam-subjects";
import {HomeWorkPage} from "../pages/home-work/home-work";
import {LibraryPage} from "../pages/book/library/library";
import {BorrowedBooksPage} from "../pages/book/borrowed-books/borrowed-books";
import {ProgressReportPage} from "../pages/progress-report/progress-report";
import {AttendancePage} from "../pages/attendance/attendance";
import {GallaryPage} from "../pages/gallary/gallary";
import {NotificationsPage} from "../pages/notifications/notifications";
import {ExamExamresultDetailPage} from "../pages/exam/exam-examresult-detail/exam-examresult-detail";
import {MonthCalendarModule} from "simple-angular-calendar";
import {SuccessModalComponent} from "../components/success-modal/success-modal";
import {InfoSectionModalComponent} from "../components/info-section/info-section";
import { IonicImageViewerModule } from 'ionic-img-viewer';
import {UtilServiceProvider} from './../providers';
import { OrderDetailPage } from './../pages/shopping/order-detail/order-detail';
import { Camera } from '@ionic-native/camera';
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { TrackPage } from '../pages/track/track';
import { SwipeSegmentDirective } from './directives/segments.slide.directive';
import { CheckoutdetailPage } from '../pages/checkoutdetail/checkoutdetail';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        TabsPage,
        TodoListPage,
        LoginPage,
        SendOtpPage,
        DashboardPage,
        CircularPercentagesComponent,
        ClassSchedulePage,
        NewComplaintPage,
        ComplaintListPage,
        FeeTypesPage,
        FeesPendingPage,
        FeesPaidPage,
        MenuPage,
        PracticeTestsPage,
        EventListPage,
        EventDetailsPage,
        LeaveApplicationPage,
        ReceiptImagePage,
        QuestionsPage,
        AnswersPage,
        ShowcaseListPage,
        ShowcaseDetailsPage,
        ShowcaseCreatePage,
        ShowcaseProfilePage,
        ShowcaseItemComponent,
        ShopPage,
        ProductComponent,
        ShoppingCartPage,
        IssueChatPage,
        ForumPostsPage,
        ForumPostCreatePage,
        ForumPostDetailsPage,
        ForumPostItemComponent,
        ExamSubjectsPage,
        ExamResultsPage,
        HomeWorkPage,
        LibraryPage,
        BorrowedBooksPage,
        ProgressReportPage,
        AttendancePage,
        GallaryPage,
        NotificationsPage,
        ExamExamresultDetailPage,
        OrdersPage,
        OrderDetailPage,
        CheckoutdetailPage,
        ShopTabPage,
        EventTabPage,
        FeesTabPage,
        OrdersTabPage,
        ForumTabPage,
        TrackPage,
        SuccessModalComponent,
        InfoSectionModalComponent,
        SwipeSegmentDirective
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp,{tabsHideOnSubPages:true}),
        RoundProgressModule,
        HttpClientModule,
        IonicImageViewerModule,
        MonthCalendarModule,
        SuperTabsModule.forRoot(),
        NgxEmojiPickerModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        TodoListPage,
        MenuPage,
        TabsPage,
        LoginPage,
        SendOtpPage,
        DashboardPage,
        ClassSchedulePage,
        NewComplaintPage,
        ComplaintListPage,
        FeeTypesPage,
        FeesPendingPage,
        FeesPaidPage,
        PracticeTestsPage,
        EventListPage,
        EventDetailsPage,
        LeaveApplicationPage,
        ReceiptImagePage,
        QuestionsPage,
        AnswersPage,
        ShowcaseListPage,
        ShowcaseDetailsPage,
        ShowcaseCreatePage,
        ShowcaseProfilePage,
        ShopPage,
        ShoppingCartPage,
        IssueChatPage,
        ForumPostsPage,
        ForumPostCreatePage,
        ForumPostDetailsPage,
        ExamSubjectsPage,
        ExamResultsPage,
        HomeWorkPage,
        LibraryPage,
        BorrowedBooksPage,
        ProgressReportPage,
        AttendancePage,
        GallaryPage,
        NotificationsPage,
        ExamExamresultDetailPage,
        OrdersPage,
        ShopTabPage,
        OrderDetailPage,
        CheckoutdetailPage,
        EventTabPage,
        FeesTabPage,
        OrdersTabPage,
        ForumTabPage,
        TrackPage,
        SuccessModalComponent,
        InfoSectionModalComponent
    ],
    providers: [
        UtilServiceProvider,
        StatusBar,
        SplashScreen,
        Camera,
        HTTP,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
