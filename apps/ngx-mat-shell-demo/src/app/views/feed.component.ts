import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxMatShellViewComponent } from '@projectbay/ngx-mat-shell';

@Component({
  selector: 'ngx-mat-shell-demo-feed',
  template: ` <h1>Welcome to awesome Feed</h1> `,
  styles: [``],
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent extends NgxMatShellViewComponent {}
