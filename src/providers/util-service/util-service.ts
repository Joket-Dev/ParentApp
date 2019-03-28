import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { App, Events, LoadingController, ToastController, AlertController, ActionSheetController } from 'ionic-angular';
declare function unescape(string: string): string;
declare function atob(string: string): string;
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { SocialSharing } from '@ionic-native/social-sharing';
// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class UtilServiceProvider {
  // public baseUrl: string = 'http://192.168.22.14:8085/';
  public baseUrl: string = 'https://goteam-dev.azurewebsites.net/';
  // public apiUrl: string = "https://goteam-dev.azurewebsites.net/api/";
  public apiUrl: string = this.baseUrl + "api/";
  public pictureUrl: string = this.baseUrl + "Userimage/Actual/";
  public loading: any;
  public toast: any;
  public picObj: any = {};
  public userType: string = '';
  // public fileTransfer: FileTransferObject;
  public userProfile: any;
  // "cordova-plugin-file-transfer": "^1.7.0",

  pushOptions: any = {
    android: {
      iconColor: 'transparent',
      senderID: 1079698724761,
      icon: 'icon',
      sound: true,
      vibrate: true,
      clearBadge: true
    },
    ios: {
      alert: true,
      badge: true,
      sound: true,
      clearBadge: true
    },
    windows: {},
    browser: {
      pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    }
  };
  constructor(
    // public http: Http,
    public app: App,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public events: Events,
    private camera: Camera,
    // private transfer: FileTransfer,
    // public jwtHelper: JwtHelper,
  ) {

  }

  public setDeviceToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getDeviceToken() {
    if (localStorage.getItem('token') && (localStorage.getItem('token') != 'null')) {
      return localStorage.getItem('token');
    } else {
      '';
    }
  }

  public setLoginType(type: string) {
    this.userType = type;
  }

  public getUsertype(): string {
    return this.userType;
  }


  public getUserTeamTitle() {
    let userObj = JSON.parse(localStorage.getItem('user_data'));
    // return userObj.title + "," + userObj.universityName + "(" + userObj.sportName + ")";
    return userObj.universityName + " - " + userObj.sportName;
  }

  public showWaitingLoading(notShowLoader?: boolean) {
    if (notShowLoader) {
      return
    }
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        content: 'Please Wait...'
      });
      this.loading.present();
    }
  }

  public dismissWaitingLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  presentAlert(title: string, message: any, buttonText: string[] = ['Ok']) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: buttonText
    });
    alert.present();
  }

  public showToast(msg: string = "Something went wrong. Please try again later...",
    showCloseButton: boolean = false,
    position: string = "bottom",
    duration: number = 1500,
  ) {
    showCloseButton = false;
    var config = {
      message: msg,
      duration: duration,
      position: position,
      showCloseButton: showCloseButton
    };

    // if (showCloseButton)
    //   delete config.duration;

    this.toast = this.toastCtrl.create(config);
    this.toast.present()
  }

  public showErrorToast(msg: string = "Something went wrong. Please try again later...",
    showCloseButton: boolean = false,
    title: string = "Oops!",
  ) {
    this.showToast(title + " " + msg, showCloseButton)
  }

  public dismissToast() {
    if (this.toast)
      this.toast.dismiss();
  }

  public showErrorCall(err: any, show: number = 0) {
    if (err._body) {
      try {
        let errBody: any = JSON.parse(err._body);
        let errStr = errBody.message;
        // Object.keys(errBody).map(val => errStr += errBody[val]);
        if (err.status === 404) {
          if (show == 0)
            this.showErrorToast(errStr, true);
        } else if (err.status == 406 && errBody.message) {
          if (errBody.message == 'Sorry you have to login first') {
            this.events.publish('call:logout')
          }
          if (show == 0)
            this.showErrorToast(errBody.message);
        } else {
          if (show == 0)
            this.showErrorToast(errStr);
        }
        if (err.status === 401 && localStorage.getItem('isLoggedin')) {
          this.events.publish('call:logout')
        }
      } catch (error) {
        this.showErrorToast();
      }
    } else if (err.message) {
      this.showErrorToast(err.message);
    } else {
      this.showErrorToast();
    }
  }

  public showConfirm(title: string, message: string,buttons:any[]=['No','Yes']) {
    return new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: title,
        message: message,
        buttons: [
          {
            text: buttons[0],
            handler: () => {
              reject(false);
            }
          },
          {
            text: buttons[1],
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      confirm.present();
    });
  }

  // share(thing: any) {
  //   this.socialSharing.share(thing).catch(() => {
  //     this.showErrorToast("Something went wrong to share...");
  //   })
  // }

  public storeUserSessionData(resp: any) {
    if (resp.token)
      localStorage.setItem("accessToken", resp.token);
    delete resp.accessToken;
    try {
      let data: any = resp.data;
      if (data && data.id)
        localStorage.setItem('user_data', JSON.stringify(data));
    } catch (error) {
      this.showErrorToast("Something went wrong during signup.")
    }

  }

  public updateSpecificUserDetail(key, val) {
    let user = JSON.parse(localStorage.getItem('user_data'));
    user[key] = val;
    localStorage.setItem('user_data', JSON.stringify(user));
  }

  public getUserDetails() {
    return JSON.parse(localStorage.getItem('user_data'));
  }

  public openImageActionSheet(callback) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select profile picture',
      buttons: [
        {
          text: 'Upload File',
          handler: () => callback(1)
        }, {
          text: 'Take picture',
          handler: () => callback(2)
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => callback(0)
        }
      ]
    });
    actionSheet.present();
  }

  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 1 //camera
    }
    
    return this.camera.getPicture(options);
  }

  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  public dismissLatestModal() {
    let firstViewCtrl = this.app.getActiveNav().first();
    this.app.getActiveNav().remove(firstViewCtrl.index, this.app.getActiveNav().length()).then(() => {
      firstViewCtrl.dismiss();
    });
  }
}
