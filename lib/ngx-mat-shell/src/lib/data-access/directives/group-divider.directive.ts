import { Directive } from '@angular/core';

@Directive({
  selector: 'ng-template[ngxMatShellGroupDivider]',
  standalone: true,
})
export class NgxMatShellGroupDividerDirective {
  static ngTemplateContextGuard(
    _dir: NgxMatShellGroupDividerDirective,
    ctx: unknown
  ): ctx is undefined {
    return true;
  }
}
