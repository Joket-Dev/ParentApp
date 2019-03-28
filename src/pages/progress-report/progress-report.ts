import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  NavParams,
  Platform,
  AlertController,
  ToastController,
  ModalController
} from "ionic-angular";
import * as _ from "lodash";
import { SuccessModalComponent } from "./../../components/success-modal/success-modal";
import { NotificationsPage } from "../notifications/notifications";

@Component({
  selector: "page-progress-report",
  templateUrl: "progress-report.html"
})
export class ProgressReportPage {
  selectedSubject = "hindi";
  canvasElement: any;
  isSigned: boolean;
  isSigneRemain: boolean = true;
  isSignSubmit: boolean = false;
  reportList: any[] = [
    {
      title: "Attendance",
      current: 75,
      previous: 85
    },
    {
      title: "Results",
      current: 85,
      previous: 95
    },
    {
      title: "Health",
      current: 95,
      previous: 95
    },
    {
      title: "Sports",
      current: 85,
      previous: 87
    }
  ];

  overAll: any[] = [];

  saveX: number;
  saveY: number;
  selectedColor = "#9e2956";
  @ViewChild("imageCanvas") canvas: any;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private plt: Platform,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.overAll = _.shuffle(this.reportList);
    // Set the Canvas Element and its size
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() - 26 + "";
    this.canvasElement.height = 200;
  }
  startDrawing(ev) {
    var canvasPosition = this.canvasElement.getBoundingClientRect();

    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  }

  moved(ev) {
    let elem: HTMLElement = document.querySelector(
      "ion-content#progrssreportPage .scroll-content"
    );
    if (elem) {
      elem.style.overflowY = "hidden";
    }

    var canvasPosition = this.canvasElement.getBoundingClientRect();

    let ctx = this.canvasElement.getContext("2d");
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;

    ctx.lineJoin = "round";
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();

    ctx.stroke();

    this.saveX = currentX;
    this.saveY = currentY;
  }

  stopDrawing(ev) {
    let elem: HTMLElement = document.querySelector(
      "ion-content#progrssreportPage .scroll-content"
    );
    if (elem) {
      elem.style.overflowY = "scroll";
    }
    this.isSigned = true;
  }

  clearCanvas() {
    let ctx = this.canvasElement.getContext("2d");
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.isSigned = false;
  }

  segmentChanged(e) {
    this.reportList = _.shuffle(this.reportList);
  }
  openConfirmationBox() {
    let alert = this.alertCtrl.create({
      title: "Confirmation",
      message: "Do you want to meet Principal?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            const modal = this.modalCtrl.create(SuccessModalComponent, null, {
              showBackdrop: true
            });
            modal.present();
          }
        }
      ]
    });
    alert.present();
  }

  setConfirmation() {
    let alert = this.alertCtrl.create({
      title: "Confirmation",
      message: "Do you want to submit signature?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            this.isSigneRemain = true;
            this.isSignSubmit = true;
            const modal = this.modalCtrl.create(SuccessModalComponent, null, {
              showBackdrop: true
            });
            modal.present();
          }
        }
      ]
    });
    alert.present();
  }

  openNotificationsPage() {
    this.navCtrl.push(NotificationsPage);
  }
}
