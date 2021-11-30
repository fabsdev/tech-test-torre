import {
  Component,
  AfterViewChecked,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import { SpinnerService } from './../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  styleUrls: ['./spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="overlay" *ngIf="isLoading | async">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div> `,
})
export class SpinnerComponent implements AfterViewChecked {
  isLoading = this._spinnerService.isLoading;
  constructor(
    private cdRef: ChangeDetectorRef,
    private _spinnerService: SpinnerService
  ) {}

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
}
