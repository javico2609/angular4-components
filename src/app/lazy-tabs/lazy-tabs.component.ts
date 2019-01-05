import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { LazyTabComponent } from './lazy-tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lazy-tabs',
  template: `
    <div>
      <lazy-tab-nav
        [tabs]="tabs"
        (onTabClick)="open($event.originalEvent, $event.tab)"
        (onTabCloseClick)="close($event.originalEvent, $event.tab)"></lazy-tab-nav>

      <div class="tab-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./lazy-tabs.component.scss']
})
export class LazyTabsComponent implements AfterContentInit {

  @Input() public style: any;
  @Input() public controlClose: boolean;
  @Input() public lazy = true;

  @ContentChildren(LazyTabComponent) tabPanels: QueryList<LazyTabComponent>;

  @Output() public onChange: EventEmitter<any> = new EventEmitter();
  @Output() public onClose: EventEmitter<any> = new EventEmitter();

  public tabs: LazyTabComponent[];
  private _activeIndex: number;

  constructor(public el: ElementRef) {
  }

  ngAfterContentInit() {
    this.initTabs();

    this.tabPanels.changes.subscribe(_ => {
      this.initTabs();
    });
  }

  initTabs(): void {
    this.tabs = this.tabPanels.toArray();
    for (const tab of this.tabs) {
      tab.lazy = this.lazy;
    }

    const selectedTab: LazyTabComponent = this.findSelectedTab();
    if (!selectedTab && this.tabs.length) {
      if (this.activeIndex != null && this.tabs.length > this.activeIndex) {
        this.tabs[this.activeIndex].selected = true;
        setTimeout(() => this.tabs[this.activeIndex].selected$.next(true), 500);
        return;
      }

      this.tabs[0].selected = true;
      setTimeout(() => this.tabs[0].selected$.next(true), 500);
    }
  }

  open(event: Event, tab: LazyTabComponent) {
    if (tab.disabled) {
      if (event) {
        event.preventDefault();
      }
      return;
    }

    if (!tab.selected) {
      const selectedTab: LazyTabComponent = this.findSelectedTab();
      if (selectedTab) {
        selectedTab.selected = false;
        setTimeout(() => selectedTab.selected$.next(false), 0);
      }

      tab.selected = true;
      setTimeout(() => tab.selected$.next(true), 0);
      this.onChange.emit({ originalEvent: event, index: this.findTabIndex(tab) });
    }

    if (event) {
      event.preventDefault();
    }
  }

  close(event: Event, tab: LazyTabComponent) {
    if (this.controlClose) {
      this.onClose.emit({
        originalEvent: event,
        index: this.findTabIndex(tab),
        close: () => {
          this.closeTab(tab);
        },
      },
      );
    } else {
      this.closeTab(tab);
      this.onClose.emit({
        originalEvent: event,
        index: this.findTabIndex(tab),
      });
    }

    event.stopPropagation();
  }

  closeTab(tab: LazyTabComponent) {
    if (tab.selected) {
      tab.selected = false;
      for (let i = 0; i < this.tabs.length; i++) {
        const tabPanel = this.tabs[i];
        if (!tabPanel.closed && !tab.disabled) {
          tabPanel.selected = true;
          break;
        }
      }
    }

    tab.closed = true;
  }

  findSelectedTab() {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i];
      }
    }
    return null;
  }

  findTabIndex(tab: LazyTabComponent) {
    let index = -1;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] === tab) {
        index = i;
        break;
      }
    }
    return index;
  }

  @Input() get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(val: number) {
    this._activeIndex = val;

    if (this.tabs && this.tabs.length && this._activeIndex != null) {
      this.findSelectedTab().selected = false;
      this.tabs[this._activeIndex].selected = true;
    }
  }
}
