import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, share } from 'rxjs';
import { NGX_MAT_SHELL_CONFIG } from './config.injectiontokens';
import { NgxMatShellViewService } from './ngx-mat-shell-view.service';
import { NgxMatShellSidenavState } from './shell.model';
import { NgxMatShellService } from './ngx-mat-shell.service';

@Injectable()
export class NgxMatShellSidenavService {
  private ngxMatShellService = inject(NgxMatShellService);
  private ngxMatShellViewService = inject(NgxMatShellViewService);

  private sidenavOpened = new BehaviorSubject<boolean>(
    this.ngxMatShellService.initialConfig.sidenavDefaultState !== 'collapsed'
  );
  public sidenavOpened$ = this.sidenavOpened.asObservable();

  private sidenavState = new BehaviorSubject<NgxMatShellSidenavState>(
    this.ngxMatShellService.initialConfig.sidenavDefaultState || 'spread'
  );
  public sidenavState$ = this.sidenavState.asObservable();

  public sidenavViewState$ = this.ngxMatShellViewService.viewDataState$.pipe(
    map((viewState) => viewState.sidenavConfig),
    share()
  );

  get isSidenavOpened() {
    return this.sidenavOpened.value;
  }

  public toggleSidenav() {
    this.sidenavOpened.next(!this.sidenavOpened.value);
  }

  public backdropClicked() {
    this.sidenavOpened.next(false);
  }

  public updateSidenavState(state: NgxMatShellSidenavState) {
    this.sidenavState.next(state);
  }
}
