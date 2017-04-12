import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardNavbarComponent } from './wizard-navbar/wizard-navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WizardComponent,
    WizardStepComponent,
    WizardNavbarComponent
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
