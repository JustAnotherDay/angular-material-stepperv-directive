import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from "@angular/core";
import { VERSION } from "@angular/material";
import { MatStepper } from "@angular/material/stepper";
@Component({
  selector: "material-app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent implements AfterViewInit {
  version = VERSION;

  @ViewChild("stepper") stepper: MatStepper;
  lastSelected = 0;

  ngAfterViewInit() {
    const selectedIndex = this.stepper.selectedIndex.toString();
    var _this = this;
    this.stepper._stepHeader._results.forEach(stepHeader => {
      stepHeader.nativeElement.addEventListener(
        "click",
        this.onStepHeaderClick.bind(
          null,
          stepHeader.nativeElement.attributes["ng-reflect-index"].value,
          _this,
          this.stepper
        )
      );
    });
  }

  onStepHeaderClick = (_clickedIndex, _this, stepper) => {
    if (_this.lastSelected == _clickedIndex) {
      stepper.selectedIndex = stepper._steps.length - 1;
      _clickedIndex = stepper._steps.length - 1;
    }
    _this.lastSelected = _clickedIndex;
  };
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
