import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'success-modal',
  templateUrl: 'success-modal.html'
})
export class SuccessModalComponent {

  constructor(public viewCtrl: ViewController) {

  }

  closeModal() {
      this.viewCtrl.dismiss();
  }

}
