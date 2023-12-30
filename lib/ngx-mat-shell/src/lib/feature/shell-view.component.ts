import { Component, inject } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { take } from 'rxjs';
import { NgxMatShellViewService } from '../data-access/ngx-mat-shell-view.service';

@Component({
  template: '',
})
export abstract class NgxMatShellViewComponent {
  ngxMatShellViewService = inject(NgxMatShellViewService);
  router = inject(Router);

  constructor() {
    this.router.events.pipe(take(1)).subscribe((event) => {
      if (event.type === EventType.ActivationEnd) {
        this.ngxMatShellViewService.updateViewData(event.snapshot.data);
      }
    });
  }
}
