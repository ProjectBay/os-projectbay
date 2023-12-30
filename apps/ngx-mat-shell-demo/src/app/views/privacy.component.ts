import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxMatShellViewComponent } from '@projectbay/ngx-mat-shell';

@Component({
  selector: 'ngx-mat-shell-demo-privacy',
  template: ` <h1>Welcome to awesome Privacy</h1> `,
  styles: [``],
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent extends NgxMatShellViewComponent {}
