import {
  Component, OnInit, ChangeDetectionStrategy,
  ContentChildren, QueryList, Input, EventEmitter, Output, AfterContentInit
} from '@angular/core';

import { WizardStepComponent } from "./wizard-step/wizard-step.component";

const MOVE_NEXT: number = 1;
const MOVE_BACK: number = -1;
const FIRST_MOVE: number = 0;

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardComponent implements OnInit, AfterContentInit {
  public _currentStepIndex: number = 0;
  public _currentStep: WizardStepComponent;
  public _showNavbar = true;
  public _showMiniNavigation = false;
  public _steps: WizardStepComponent[];
  public _totalSteps: number = 0;

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
  @Output() onComplete: EventEmitter<any> = new EventEmitter();
  @Output() onRefresh: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit(): void {
    this._steps = this.steps.toArray();
    this._totalSteps = this._steps.length;
    this.move(FIRST_MOVE);
  }

  nextStep() {
    this._currentStep.onNext.emit();

    if (this._currentStep._canMoveNext) {
      this.move(MOVE_NEXT);
      this.onNextStep.emit();
    }
  }

  backStep() {
    this._currentStep.onBack.emit();

    if (this._currentStep._canMoveBack) {
      this.move(MOVE_BACK);
      this.onBackStep.emit();
    }
  }

  refreshWizard() {
    this.onRefresh.emit();
  }

  private move(direction: number = MOVE_NEXT) {
    //
    this._currentStepIndex = this._currentStepIndex + direction;

    if (this._currentStepIndex < this._totalSteps) {
      this._steps.forEach(step => step.active = false);
      this._currentStep = this._steps[this._currentStepIndex];
      this._currentStep.active = true;
    }

    if (this._currentStepIndex === this._totalSteps) {
      this.onComplete.emit();
    }
  }

  private get hasNextStep(): boolean {
    return this._currentStepIndex < this._totalSteps;
  }

  private get hasPrevStep(): boolean {
    return this._currentStepIndex > 0;
  }
}
