import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxMatShellViewComponent } from '@projectbay/ngx-mat-shell';

@Component({
  selector: 'ngx-mat-shell-demo-settings',
  template: ` <h1>Welcome to awesome Settings</h1> `,
  styles: [``],
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent extends NgxMatShellViewComponent {}
