import {
  Component,
  Injector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import {
  NgxMatShellComponent,
  NgxMatShellModule,
} from '@projectbay/ngx-mat-shell';
import { ToolbarComponent } from './views/toolbar.component';
@Component({
  standalone: true,
  imports: [
    NgxMatShellModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ToolbarComponent,
  ],
  selector: 'ngx-mat-shell-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-mat-shell-demo-root';

  injector = inject(Injector);

  toggleSidebar() {
    runInInjectionContext(this.injector, () => {
      const shellApi = inject(NgxMatShellComponent);
      shellApi.api.toggleSidebar();
    });
  }
}
