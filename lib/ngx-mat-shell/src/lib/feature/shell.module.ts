import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMatShellGroupDividerDirective } from '../data-access/directives/group-divider.directive';
import { NgxMatShellGroupListItemIconDirective } from '../data-access/directives/group-list-item-icon.directive';
import { NgxMatShellGroupListItemTextFieldDirective } from '../data-access/directives/group-list-item-text-field.directive';
import { NgxMatShellGroupListItemDirective } from '../data-access/directives/group-list-item.directive';
import { NgxMatShellGroupTabBackButtonDirective } from '../data-access/directives/group-tab-back-button.directive';
import { NgxMatShellToolbarDirective } from '../data-access/directives/toolbar.directive';
import { NgxMatShellService } from '../data-access/ngx-mat-shell.service';
import { NgxMatShellSidenavService } from '../data-access/ngx-mat-sidenav.service';
import { NgxMatShellToolbarService } from '../data-access/ngx-mat-toolbar.service';
import { NgxMatShellComponent } from './shell.component';
import { NgxMatShellApiService } from '../data-access/ngx-mat-shell-api.service';
import { NgxMatShellViewService } from '../data-access/ngx-mat-shell-view.service';

@NgModule({
  imports: [
    NgxMatShellComponent,
    RouterModule,
    NgxMatShellGroupListItemTextFieldDirective,
    NgxMatShellGroupListItemIconDirective,
    NgxMatShellGroupDividerDirective,
    NgxMatShellGroupListItemDirective,
    NgxMatShellGroupTabBackButtonDirective,
    NgxMatShellToolbarDirective,
  ],
  providers: [
    NgxMatShellSidenavService,
    NgxMatShellToolbarService,
    NgxMatShellService,
    NgxMatShellApiService,
    NgxMatShellViewService,
  ],
  exports: [
    NgxMatShellComponent,
    NgxMatShellGroupListItemTextFieldDirective,
    NgxMatShellGroupListItemIconDirective,
    NgxMatShellGroupDividerDirective,
    NgxMatShellGroupListItemDirective,
    NgxMatShellGroupTabBackButtonDirective,
    NgxMatShellToolbarDirective,
  ],
})
export class NgxMatShellModule {}
