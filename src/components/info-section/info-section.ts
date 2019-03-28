import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';

@Component({
  selector: 'info-section',
  templateUrl: 'info-section.html'
})
export class InfoSectionModalComponent {
  type ='';
  constructor(public viewCtrl: ViewController,public navParams:NavParams) {
    this.type = navParams.get('type');
    console.log('====================================');
    console.log( this.type );
    console.log('====================================');
  }

  closeModal() {
      this.viewCtrl.dismiss();
  }

}
