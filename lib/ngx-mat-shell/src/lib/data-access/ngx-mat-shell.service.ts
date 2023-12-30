import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NGX_MAT_SHELL_CONFIG } from './config.injectiontokens';
import { NgxMatShellConfig } from './shell.model';

@Injectable()
export class NgxMatShellService {
  public initialConfig = inject(NGX_MAT_SHELL_CONFIG);

  private config = new BehaviorSubject<NgxMatShellConfig>(this.initialConfig);
  public config$ = this.config.asObservable();
}
