import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  QueryList,
  TemplateRef,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMatShellToolbarDirective } from '../../data-access/directives/toolbar.directive';
import { NgxMatShellViewService } from '../../data-access/ngx-mat-shell-view.service';
import { NgxMatShellToolbarService } from '../../data-access/ngx-mat-toolbar.service';

@Component({
  selector: 'ngx-mat-shell-toolbar',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgTemplateOutlet,
    NgxMatShellToolbarDirective,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMatShellToolbarComponent {
  ngxMatShellToolbarService = inject(NgxMatShellToolbarService);
  ngxMatShellViewDataService = inject(NgxMatShellViewService);

  $toolbarState = this.ngxMatShellToolbarService.toolbarState$.pipe();

  @Input()
  customToolbarTemplates!: QueryList<TemplateRef<NgxMatShellToolbarDirective>>;

  @Input()
  customToolbarComponentRefTemplates!: QueryList<NgxMatShellToolbarDirective>;

  @Input()
  injector!: Injector;

  getToolbarTemplateRef(kind: string | undefined) {
    if (this.customToolbarTemplates.length === 0) return undefined;

    let toolbarRef = this.customToolbarComponentRefTemplates.find(
      (ref) => ref.toolbarKind === kind
    );
    if (toolbarRef === undefined || kind === undefined) {
      toolbarRef = this.customToolbarComponentRefTemplates.get(0);
    }
    if (toolbarRef === undefined) return undefined;

    return this.customToolbarTemplates.get(
      this.customToolbarComponentRefTemplates.toArray().indexOf(toolbarRef)
    );
  }
}
