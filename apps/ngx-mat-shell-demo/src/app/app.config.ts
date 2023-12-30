import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideShellConfig } from '@projectbay/ngx-mat-shell';
import { ShellConfig } from './app.shell-config';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideShellConfig(ShellConfig)],
};
