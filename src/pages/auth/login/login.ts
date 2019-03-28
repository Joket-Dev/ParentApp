import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MenuPage} from "../../../navigation/menu/menu";
import {SendOtpPage} from "../send-otp/send-otp";
import {Global} from "../../Global";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    private data :{
        success:string;
        parentUserData:{
            token:string;
            name:string;
            id:string;
        };
        message:string;
    };
    private mobile_number:string;
    private otp:string;
    constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
        if(Global.mobile_number !=""){
            this.mobile_number = Global.mobile_number;
        }
        else{
            this.navCtrl.setRoot(SendOtpPage);
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    login(){
        alert("http://terahut.com/api/api/parent_app/login-otp-verify?mobile="+this.mobile_number+"&otp="+this.otp);
        let body=JSON.stringify({
            mobile:this.mobile_number,
            otp:this.otp
        });
        this.http.post("http://terahut.com/api/api/parent_app/login-otp-verify?mobile="+this.mobile_number+"&otp="+this.otp, body).subscribe(data=>{
            alert(JSON.stringify(data));
            //this.data = JSON.parse(JSON.stringify(data)); 
            if(this.data.success== "1"){
                Global.token = this.data.parentUserData.token;
                Global.parentName = this.data.parentUserData.name;
                Global.id = this.data.parentUserData.id;
                //Global.mobile_number = this.mobile_number;
                this.navCtrl.setRoot(MenuPage);
            }
            else{
                alert(this.data.message);
            }
            
        }, err=>{
            alert("Can't access to server");
        });
    }

    openSendOtpPage() {
        this.navCtrl.setRoot(SendOtpPage);
    }

}
