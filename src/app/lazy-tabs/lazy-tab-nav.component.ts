import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LazyTabComponent } from './lazy-tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lazy-tab-nav',
  template: `
    <div>
      <ul class="nav nav-tabs light-tabs"
          role="tablist">
        <ng-template ngFor
                     let-tab
                     [ngForOf]="tabs">

          <li (click)="clickTab($event,tab)"
              *ngIf="!tab.closed"
              [class.active]="tab.selected">
            <a>{{ tab.header }}</a>
          </li>

        </ng-template>
      </ul>
    </div>
  `,
  styleUrls: ['./lazy-tab-nav.component.scss']
})
export class LazyTabNavComponent {

  @Input() public tabs: LazyTabComponent[];
  @Output() public onTabClick: EventEmitter<any> = new EventEmitter();
  @Output() public onTabCloseClick: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  clickTab(event, tab: LazyTabComponent) {
    this.onTabClick.emit({
      originalEvent: event,
      tab: tab,
    });
  }

  clickClose(event, tab: LazyTabComponent) {
    this.onTabCloseClick.emit({
      originalEvent: event,
      tab: tab,
    });
  }
}
