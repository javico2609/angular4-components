import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardNavbarComponent } from './wizard-navbar/wizard-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardNavigationComponent } from "./wizard-navigation/wizard-navigation.component";

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [
    WizardComponent,
    WizardStepComponent,
    WizardNavbarComponent,
    WizardNavigationComponent
  ],
  exports: [WizardComponent, WizardStepComponent]
})
export class WizardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WizardModule,
      providers: []
    }
  }
}
