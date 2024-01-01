import { Directive } from '@angular/core';

export interface GroupListItemIconContext {
  sidenavTitle: string;
  sidenavIcon: string;
  isSidenavSimple: boolean;
}

@Directive({
  selector: 'ng-template[ngxMatShellGroupListItemIcon]',
  standalone: true,
})
export class NgxMatShellGroupListItemIconDirective {
  static ngTemplateContextGuard(
    _dir: NgxMatShellGroupListItemIconDirective,
    ctx: unknown
  ): ctx is GroupListItemIconContext {
    return true;
  }
}
