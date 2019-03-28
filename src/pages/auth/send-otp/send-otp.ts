import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Headers, RequestOptions} from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {Global} from '../../Global';
/**
 * Generated class for the SendOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-send-otp',
    templateUrl: 'send-otp.html',
})
export class SendOtpPage {

    mobile_number:string;
    private data :{
        success:string;
        message:string;
        otp:string;
    };
    private apiUrl = 'https://restcountries.eu/rest/v2/all';
    private crossApi = 'https://cors-anywhere.herokuapp.com/';
    constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
        
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SendOtpPage');
    }
    private extractData(res: Response) {
        let body = res;
        return body || {};
      }
    
      private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const err = error || '';
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    getCountries(): Observable<string[]> {
        return this.http.get(this.apiUrl).pipe(
          map(this.extractData),
          catchError(this.handleError)
        );
    }
    sendOtp(){
        // this.getCountries().subscribe(
        //     countries=> {alert(JSON.stringify(countries))},
        //     error=>{alert("countries error");}
        // )

        //alert(this.mobile_number);
        let headers = new HttpHeaders(
            {
              'Content-Type' : 'application/json',
              'Access-Control-Allow-Origin' : '*',
              'Accept':'application/json',
              'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT',
              'Access-Control-Allow-Credentials': 'true'
            });
            //let options = new RequestOptions({ headers: headers });
            
            let data = JSON.stringify({
              mobile: this.mobile_number
            });
            
            // return new Promise((resolve, reject) => {
            //   this.http.post('http://terahut.com/api/api/parent_app/login-generate-otp', data, {headers :headers } )
            //   .toPromise()
            //   .then((response) =>
            //   {
            //     alert('API Response : '+ JSON.stringify(response));
            //     resolve();
            //   })
            //   .catch((error) =>
            //   {
            //     alert('API Error : '+ JSON.stringify(error.status));
            //     console.error('API Error : ', JSON.stringify(error));
            //     reject();
            //   });
            // });
        // var headers = new HttpHeaders();
        // headers.append('Access-Control-Allow-Origin' , '*');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        // headers.append('Accept','application/json');
        // headers.append('content-type','application/json');


        // alert(JSON.stringify(headers));

        this.http.post("http://terahut.com/api/api/parent_app/login-generate-otp?mobile="+this.mobile_number, data ).subscribe(data=>{
            alert(JSON.stringify(data));
            this.data = JSON.parse(JSON.stringify(data)); 
            if(this.data.success== "1"){
                alert(this.data.message);
                Global.mobile_number = this.mobile_number;
                console.log(this.data.otp);
            }
            else{
                alert(this.data.message);
            }
            this.navCtrl.setRoot(LoginPage);
        }, err=>{
            alert("Can't access to server");
            alert(err);
        })
        //this.navCtrl.setRoot(LoginPage);*/

    }

}
