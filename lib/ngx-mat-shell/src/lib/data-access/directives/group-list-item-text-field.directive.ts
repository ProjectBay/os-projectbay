import { Directive } from '@angular/core';

export interface GroupListItemTextFieldContext {
  sidenavTitle: string;
}

@Directive({
  selector: 'ng-template[ngxMatShellGroupListItemTextField]',
  standalone: true,
})
export class NgxMatShellGroupListItemTextFieldDirective {
  static ngTemplateContextGuard(
    _dir: NgxMatShellGroupListItemTextFieldDirective,
    ctx: unknown
  ): ctx is GroupListItemTextFieldContext {
    return true;
  }
}
