import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxMatShellViewComponent } from '@projectbay/ngx-mat-shell';

@Component({
  selector: 'ngx-mat-shell-demo-landing',
  template: ` <h1>Welcome to awesome NgxMatShell Library</h1> `,
  styles: [``],
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent extends NgxMatShellViewComponent {}
