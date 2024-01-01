import { Directive, Input } from '@angular/core';
import { NgxMatShelltoolbarConfig } from '../shell.model';

export interface ToolbarContext {
  toolbarConfig: NgxMatShelltoolbarConfig;
}

@Directive({
  selector: '[ngxMatShellToolbar]',
  standalone: true,
})
export class NgxMatShellToolbarDirective {
  @Input() toolbarKind = 'default';

  static ngTemplateContextGuard(
    _dir: NgxMatShellToolbarDirective,
    ctx: unknown
  ): ctx is ToolbarContext {
    return true;
  }
}
