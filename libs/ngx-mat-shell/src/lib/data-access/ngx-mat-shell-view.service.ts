import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxMatShellViewData } from './shell.model';

@Injectable()
export class NgxMatShellViewService {
  private viewDataState: BehaviorSubject<NgxMatShellViewData> =
    new BehaviorSubject<NgxMatShellViewData>({});
  viewDataState$ = this.viewDataState.asObservable();

  public updateViewData(viewData: NgxMatShellViewData) {
    this.viewDataState.next(viewData);
  }
  get currentViewDataState() {
    return this.viewDataState.value;
  }
}
