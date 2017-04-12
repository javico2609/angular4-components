import {
  Component, OnInit, ChangeDetectionStrategy,
  ContentChildren, QueryList, Input, EventEmitter, Output
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { WizardStepComponent } from "app/wizard/wizard-step.component";

const MOVE_NEXT: number = 1;
const MOVE_BACK: number = -1;
const FIRST_MOVE: number = 0;

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardComponent implements OnInit {
  private _currentStepIndex: number = 0;
  private _currentStep: WizardStepComponent;
  private _showNavbar = true;
  private _showMiniNavigation = false;
  private _steps: WizardStepComponent[];
  private _totalSteps: number = 0;

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;

  @Input()
  set showNavbar(showNavbar: boolean) {
    this._showNavbar = showNavbar;
  }
  get showNavbar() {
    return this._showNavbar;
  }

  @Input()
  set showMiniNavigation(showMiniNavigation: boolean) {
    this._showMiniNavigation = showMiniNavigation;
  }
  get showMiniNavigation() {
    return this._showMiniNavigation;
  }

  @Output() onNextStep: EventEmitter<any> = new EventEmitter();
  @Output() onBackStep: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit(): void {
    this._steps = this.steps.toArray();
    this._totalSteps = this._steps.length;
    this.move(FIRST_MOVE);
  }

  nextStep() {
    if (this._currentStep._canMoveNext) {
      this.move(MOVE_NEXT);
    }

    this.onNextStep.emit();
    this._currentStep.onNext.emit();
  }

  backStep() {
    if (this._currentStep._canMoveBack) {
      this.move(MOVE_BACK);
    }

    this.onBackStep.emit();
  }

  private move(direction: number = MOVE_NEXT) {
    this._steps[this._currentStepIndex].active = false;
    this._currentStepIndex = this._currentStepIndex + direction;
    this._currentStep = this._steps[this._currentStepIndex];
    this._currentStep.active = true;
  }

  private get hasNextStep(): boolean {
    return this._currentStepIndex < this._totalSteps - 1;
  }

  private get hasPrevStep(): boolean {
    return this._currentStepIndex > 0;
  }
}
