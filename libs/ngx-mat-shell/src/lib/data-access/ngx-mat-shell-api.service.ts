import { Injectable, inject } from '@angular/core';
import { NgxMatShellSidenavService } from './ngx-mat-sidenav.service';
import { NgxMatShellSidenavState } from './shell.model';

@Injectable()
export class NgxMatShellApiService {
  private ngxMatShellSidenavService = inject(NgxMatShellSidenavService);

  /**
   * sidebarOpened
   */
  get sidebarOpened() {
    return this.ngxMatShellSidenavService.isSidenavOpened;
  }
  get sidebarOpened$() {
    return this.ngxMatShellSidenavService.sidenavOpened$;
  }

  /**
   * SidebarState
   */
  get sidebarState() {
    return this.ngxMatShellSidenavService.isSidenavOpened;
  }
  get sidebarState$() {
    return this.ngxMatShellSidenavService.sidenavState$;
  }

  /**
   * Utility Methods
   */
  public toggleSidebar() {
    this.ngxMatShellSidenavService.toggleSidenav();
  }

  public setSidebarState(sidebarState: NgxMatShellSidenavState) {
    this.ngxMatShellSidenavService.updateSidenavState(sidebarState);
  }
}
