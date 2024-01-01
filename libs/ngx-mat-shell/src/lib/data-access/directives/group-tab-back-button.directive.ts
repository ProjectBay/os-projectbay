import { Directive } from '@angular/core';

@Directive({
  selector: 'ng-template[ngxMatShellGroupTabBackButton]',
  standalone: true,
})
export class NgxMatShellGroupTabBackButtonDirective {
  static ngTemplateContextGuard(
    _dir: NgxMatShellGroupTabBackButtonDirective,
    ctx: unknown
  ): ctx is undefined {
    return true;
  }
}
