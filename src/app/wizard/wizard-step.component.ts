import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css'],
  animations: [
    trigger('isVisibleChanged', [
      state('1', style({ opacity: 1, display: 'inline' })),
      state('0', style({ opacity: 0, display: 'none' })),
      transition('0 => 1', animate('0.5s'))
    ])
  ],
})
export class WizardStepComponent implements OnInit {
  active: boolean = false;
  private _title: string;
  private _description: string;
  private _icon: string;

  @Input()
  set title(title: string) {
    this._title = title;
  }
  get title() {
    return this._title || '';
  }

  @Input()
  set description(description: string) {
    this._description = description;
  }
  get description() {
    return this._description || '';
  }

  @Input()
  set icon(icon: string) {
    this._icon = icon;
  }
  get icon() {
    return this._icon || '';
  }

  constructor() { }

  ngOnInit() {
  }

}
