import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMatShellToolbarViewComponent } from '@projectbay/ngx-mat-shell';

@Component({
  selector: 'ngx-mat-shell-demo-toolbar',
  template: `
    <mat-toolbar>
      <button mat-icon-button (click)="toggleSidebar()">
        <mat-icon>menu</mat-icon>
      </button>
      {{ title }}
    </mat-toolbar>
  `,
  styles: [``],
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent extends NgxMatShellToolbarViewComponent {
  @Input()
  title = 'default';

  toggleSidebar() {
    this.shellService.toggleSidebar();
  }
}
