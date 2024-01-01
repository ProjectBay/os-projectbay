import { Directive } from '@angular/core';
import { NgxMatShellRoute } from '../shell.model';

export interface GroupListItemContext {
  route: NgxMatShellRoute;
  sidenavTitle: string;
}

@Directive({
  selector: 'ng-template[ngxMatShellGroupListItem]',
  standalone: true,
})
export class NgxMatShellGroupListItemDirective {
  static ngTemplateContextGuard(
    _dir: NgxMatShellGroupListItemDirective,
    ctx: unknown
  ): ctx is GroupListItemContext {
    return true;
  }
}
