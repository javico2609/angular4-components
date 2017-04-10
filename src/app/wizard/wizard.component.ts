import {
  Component, OnInit, ChangeDetectionStrategy,
  ContentChildren, QueryList,
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { WizardStepComponent } from "app/wizard/wizard-step.component";

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('stepStatus', [
      state('active', style({ opacity: 1 })),
      state('void', style({ opacity: 0, display: 'none' })),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ]),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
    ])
  ]
})
export class WizardComponent implements OnInit {
  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;
  private currentStep: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.steps.toArray()[this.currentStep].active = true;
  }

  nextStep() {
    this.steps.toArray()[this.currentStep].active = false;
    this.steps.toArray()[this.currentStep].status = 'void';
    this.steps.toArray()[++this.currentStep].active = true;
  }

  backStep() {
    this.steps.toArray()[this.currentStep].active = false;
    this.steps.toArray()[this.currentStep - 1].status = 'active';
    this.steps.toArray()[--this.currentStep].active = true;
  }

  private get hasNextStep(): boolean {
    return this.currentStep < this.steps.length - 1;
  }

  private get hasPrevStep(): boolean {
    return this.currentStep > 0;
  }

}
