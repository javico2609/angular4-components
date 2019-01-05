import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'wizard-step',
  template: `
    <div [@isVisibleChanged]="active">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('isVisibleChanged', [
      state('1', style({ opacity: 1, display: 'inline' })),
      state('0', style({ opacity: 0, display: 'none' })),
      transition('0 => 1', animate('0.5s'))
    ])
  ]
})
export class WizardStepComponent implements OnInit {
  active: boolean = false;
  _canMoveNext: boolean = true;
  _canMoveBack: boolean = true;

  private _title: string;

  @Output() onNext: EventEmitter<any> = new EventEmitter();
  @Output() onBack: EventEmitter<any> = new EventEmitter();

  @Input()
  set canMoveNext(canMoveNext: boolean) {
    this._canMoveNext = canMoveNext;
  }
  get canMoveNext() {
    return this._canMoveNext;
  }

  @Input()
  set canMoveBack(canMoveBack: boolean) {
    this._canMoveNext = canMoveBack;
  }
  get canMoveBack() {
    return this._canMoveBack;
  }

  @Input()
  set title(title: string) {
    this._title = title;
  }
  get title() {
    return this._title || '';
  }

  constructor() { }

  ngOnInit() {
  }

}
