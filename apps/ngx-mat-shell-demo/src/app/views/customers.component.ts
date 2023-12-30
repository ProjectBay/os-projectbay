import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxMatShellViewComponent } from '@projectbay/ngx-mat-shell';

@Component({
  selector: 'ngx-mat-shell-demo-customers',
  template: ` <h1>Welcome to awesome Customers</h1> `,
  styles: [``],
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent extends NgxMatShellViewComponent {}
