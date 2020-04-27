import { HostListener, Directive } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Directive({
  selector: '[appMatStepperScrollTop]'
})
export class MatStepperScrollTopDirective {

  constructor(private stepper: MatStepper) { }

  @HostListener('selectionChange', ['$event'])
  selectionChanged(selection: StepperSelectionEvent) {
    const stepId = this.stepper._getStepLabelId(selection.selectedIndex);
    const stepElement = document.getElementById(stepId);
    if (stepElement) {
      setTimeout(() => {
        stepElement.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
      }, 250);
    }
  }
}