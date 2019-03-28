import {Component} from '@angular/core';


@Component({
    selector: 'circular-percentages',
    templateUrl: 'circular-percentages.html'
})
export class CircularPercentagesComponent {
    progressConfig = {
        color: '#fe6f3d',
        stroke: 2,
        radius: 40
    };

    text: string;

    constructor() {
        console.log('Hello CircularPercentagesComponent Component');
        this.text = 'Hello World';
    }

}
