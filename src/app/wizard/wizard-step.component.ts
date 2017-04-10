import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit {
  active: boolean = false;
  status: string = '';
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
