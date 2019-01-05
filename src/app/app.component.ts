import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  canMoveNextCondition: boolean = true;

  constructor() {
    this.canMoveNext();
  }

  onNextSecondAuth() {
    console.log('onNextSecondAuth !!!');
  }

  onBackStep() {
    console.log('onBackStep Wizard !!!');
  }

  onNextStep() {
    console.log('onNextStep Wizard !!!');
  }

  onBackExecute() {
    console.log('onBackExecute !!!');
  }

  onComplete() {
    console.log('onComplete !!!');
  }

  canMoveNext() {
    setTimeout(() => {
      // this.canMoveNextCondition = false;
    }, 3000)
  }
}
