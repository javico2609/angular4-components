import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { WizardStepComponent } from './wizard-step.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WizardComponent,
    WizardStepComponent
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
