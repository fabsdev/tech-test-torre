import { Component } from '@angular/core';

import { SpinnerService } from './../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  styleUrls: ['./spinner.component.css'],
  template: `<div class="overlay" *ngIf="isLoading | async">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div> `,
})
export class SpinnerComponent {
  isLoading = this._spinnerService.isLoading;

  constructor(private _spinnerService: SpinnerService) {}
}
