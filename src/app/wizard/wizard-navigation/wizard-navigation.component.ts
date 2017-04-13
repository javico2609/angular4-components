import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wizard-navigation',
  templateUrl: './wizard-navigation.component.html',
  styleUrls: ['./wizard-navigation.component.css']
})
export class WizardNavigationComponent implements OnInit {
  private _showMiniNavigation: boolean = false;
  private _isBackButtonEnabled: boolean = true;
  private _isNextButtonEnabled: boolean = true;
  private _canMoveNext: boolean = false;

  @Output() onNext: EventEmitter<any> = new EventEmitter();
  @Output() onBack: EventEmitter<any> = new EventEmitter();
  @Output() onRefresh: EventEmitter<any> = new EventEmitter();

  constructor() { }

  @Input()
  set canMoveNext(canMoveNext: boolean) {
    this._canMoveNext = canMoveNext;
  }
  get canMoveNext() {
    return this._canMoveNext;
  }

  @Input()
  set isNextButtonEnabled(isNextButtonEnabled: boolean) {
    this._isNextButtonEnabled = isNextButtonEnabled;
  }
  get isNextButtonEnabled() {
    return this._isNextButtonEnabled;
  }

  @Input()
  set isBackButtonEnabled(isBackButtonEnabled: boolean) {
    this._isBackButtonEnabled = isBackButtonEnabled;
  }
  get isBackButtonEnabled() {
    return this._isBackButtonEnabled;
  }

  @Input()
  set showMiniNavigation(showMiniNavigation: boolean) {
    this._showMiniNavigation = showMiniNavigation;
  }
  get showMiniNavigation() {
    return this._showMiniNavigation;
  }

  nextStep() {
    this.onNext.emit();
  }

  backStep() {
    this.onBack.emit();
  }

  onRefreshWizard() {
    this.onRefresh.emit();
  }

  ngOnInit() {
  }

}
