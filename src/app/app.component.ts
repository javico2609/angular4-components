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

  onNextSecondAuth(){
    console.log('onNextSecondAuth !!!');
  }

  onNextStep(){
    console.log('onNextStep !!!');
  }

  canMoveNext() {
    setTimeout(() => {
      this.canMoveNextCondition = false;
    }, 3000)
  }
}
