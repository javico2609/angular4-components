import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    this.canMoveNext();
  }
  canMoveNextCondition: boolean = true;

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
      //this.canMoveNextCondition = false;
    }, 3000)
  }
}
