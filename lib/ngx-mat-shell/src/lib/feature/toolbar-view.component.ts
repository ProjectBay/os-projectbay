import { Component, inject } from '@angular/core';
import { NgxMatShellComponent } from './shell.component';

@Component({
  template: '',
})
export abstract class NgxMatShellToolbarViewComponent {
  private shellViewComponent = inject(NgxMatShellComponent);

  public get shellService() {
    return this.shellViewComponent.api;
  }
}
