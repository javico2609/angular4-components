import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WizardStepComponent } from "../wizard-step/wizard-step.component";

@Component({
  selector: 'wizard-navbar',
  templateUrl: './wizard-navbar.component.html',
  styleUrls: ['./wizard-navbar.component.css']
})
export class WizardNavbarComponent implements OnInit {

  private _showNavbar = true;
  private _steps: WizardStepComponent[];
  
  @Input()
  set showNavbar(showNavbar: boolean) {
    this._showNavbar = showNavbar;
  }
  get showNavbar() {
    return this._showNavbar;
  }

  @Input()
  set steps(steps: WizardStepComponent[]) {
    this._steps = steps;
  }
  get steps() {
    return this._steps;
  }

  constructor() { }

  ngOnInit() {
  }

}
