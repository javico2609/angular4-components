import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lazy-tab',
  template: `
    <div [@isVisibleChanged]="selected">
      <ng-template [ngTemplateOutlet]="bodyTemplate"
                   *ngIf="selected$ | async"></ng-template>
    </div>
  `,
  animations: [
    trigger('isVisibleChanged', [
      state('1', style({ opacity: '1' })),
      transition('0 => *', [style({ opacity: '0' }), animate('100ms 200ms')]),
      transition('* => 0', [animate('100ms', style({ opacity: '0' }))]),
    ]),
  ],
})
export class LazyTabComponent {

  @Input() public header: string;
  @Input() public tooltipTitle: string;
  @Input() public selected: boolean;
  @Input() public disabled: boolean;
  @Input() public closable: boolean;
  @Input() public bodyTemplate: TemplateRef<any>;

  public closed: boolean;
  public lazy: boolean;
  public selected$: Subject<boolean> = new Subject<boolean>();
}
