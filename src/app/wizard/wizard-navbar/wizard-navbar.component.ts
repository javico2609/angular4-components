import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WizardStepComponent } from "../wizard-step/wizard-step.component";

@Component({
  selector: 'wizard-navbar',
  templateUrl: './wizard-navbar.component.html',
  styleUrls: ['./wizard-navbar.component.css']
})
export class WizardNavbarComponent implements OnInit {

  public _steps: WizardStepComponent[];
  public _currentStepIndex: number = 0;

  @Input()
  set steps(steps: WizardStepComponent[]) {
    this._steps = steps;
  }
  get steps() {
    return this._steps;
  }

  @Input()
  set currentStepIndex(currentStepIndex: number) {
    this._currentStepIndex = currentStepIndex;
  }
  get currentStepIndex() {
    return this._currentStepIndex;
  }

  constructor() { }

  ngOnInit() {
  }

}
