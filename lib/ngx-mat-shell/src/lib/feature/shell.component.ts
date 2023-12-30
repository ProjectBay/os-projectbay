import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injector,
  QueryList,
  TemplateRef,
  inject,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NgxMatShellGroupDividerDirective } from '../data-access/directives/group-divider.directive';
import { NgxMatShellGroupListItemIconDirective } from '../data-access/directives/group-list-item-icon.directive';
import { NgxMatShellGroupListItemTextFieldDirective } from '../data-access/directives/group-list-item-text-field.directive';
import { NgxMatShellGroupListItemDirective } from '../data-access/directives/group-list-item.directive';
import { NgxMatShellGroupTabBackButtonDirective } from '../data-access/directives/group-tab-back-button.directive';
import { NgxMatShellToolbarDirective } from '../data-access/directives/toolbar.directive';
import { NgxMatShellApiService } from '../data-access/ngx-mat-shell-api.service';
import { NgxMatShellService } from '../data-access/ngx-mat-shell.service';
import { NgxMatShellSidenavService } from '../data-access/ngx-mat-sidenav.service';
import { NgxMatShellSidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { NgxMatShellToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'ngx-mat-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    NgxMatShellToolbarComponent,
    NgxMatShellSidenavContentComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMatShellComponent {
  public api = inject(NgxMatShellApiService);
  protected injector = inject(Injector);

  protected ngxMatShellService = inject(NgxMatShellService);
  protected ngxMatShellSidenavService = inject(NgxMatShellSidenavService);
  protected drawerOpened = this.ngxMatShellSidenavService.sidenavOpened$;

  @ContentChild(NgxMatShellGroupDividerDirective, {
    read: TemplateRef,
  })
  protected customDividerTemplate!: TemplateRef<unknown>;

  @ContentChild(NgxMatShellGroupListItemTextFieldDirective, {
    read: TemplateRef,
  })
  protected customListItemTitleTemplate!: TemplateRef<unknown>;

  @ContentChild(NgxMatShellGroupListItemIconDirective, {
    read: TemplateRef,
  })
  protected customGroupListItemIconTemplate!: TemplateRef<unknown>;

  @ContentChild(NgxMatShellGroupListItemDirective, {
    read: TemplateRef,
  })
  protected customGroupListItemTemplate!: TemplateRef<unknown>;

  @ContentChild(NgxMatShellGroupTabBackButtonDirective, {
    read: TemplateRef,
  })
  protected customGroupTabBackButtonTemplate!: TemplateRef<unknown>;

  @ContentChildren(NgxMatShellToolbarDirective, {
    read: TemplateRef,
  })
  protected customToolbarTemplates!: QueryList<
    TemplateRef<NgxMatShellToolbarDirective>
  >;

  @ContentChildren(NgxMatShellToolbarDirective)
  protected customToolbarComponentRefTemplates!: QueryList<NgxMatShellToolbarDirective>;
}
