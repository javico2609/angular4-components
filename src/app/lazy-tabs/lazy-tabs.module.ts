import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyTabNavComponent } from './lazy-tab-nav.component';
import { LazyTabComponent } from './lazy-tab.component';
import { LazyTabsComponent } from './lazy-tabs.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [
    LazyTabNavComponent,
    LazyTabComponent,
    LazyTabsComponent
  ],
  exports: [LazyTabsComponent, LazyTabComponent]
})
export class LazyTabsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LazyTabsModule,
      providers: []
    }
  }
}
