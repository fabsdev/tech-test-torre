import { SpinnerService } from './spinner.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private _spinnerService: SpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._spinnerService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(() => {
        this._spinnerService.isLoading.next(false);
      })
    );
  }
}
