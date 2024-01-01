import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { NgxMatShellViewService } from './ngx-mat-shell-view.service';
import { NgxMatShellSidenavService } from './ngx-mat-sidenav.service';

@Injectable()
export class NgxMatShellToolbarService {
  ngxMatShellSidenavService = inject(NgxMatShellSidenavService);
  ngxMatShellViewService = inject(NgxMatShellViewService);

  toolbarState$ = this.ngxMatShellViewService.viewDataState$.pipe(
    map((viewState) => viewState.toolbarConfig)
  );

  menuClicked() {
    this.ngxMatShellSidenavService.toggleSidenav();
  }
}
