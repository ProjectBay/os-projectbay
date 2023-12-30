import { EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NGX_MAT_SHELL_CONFIG } from './config.injectiontokens';
import { NgxMatShellConfig } from './shell.model';

export const provideShellConfig = (
  shellConfig: NgxMatShellConfig
): Array<Provider | EnvironmentProviders> => {
  const appliedDefaultValues = applyDefaultValues(shellConfig);
  return [
    provideRouter(appliedDefaultValues.routes),
    {
      provide: NGX_MAT_SHELL_CONFIG,
      useValue: appliedDefaultValues,
    },
  ];
};

const applyDefaultValues = (
  shellConfig: NgxMatShellConfig
): NgxMatShellConfig => {
  const def: NgxMatShellConfig = {
    minWidth: 220,
    sidenavBackdrop: false,
    sidenavDefaultState: 'simple',
    sidenavHug: 'content',
    sidenavMode: 'push',
    sidenavPosition: 'start',
    sidenavTabAnimationSpeed: 300,
    ...shellConfig,
    sidenavGroups: (shellConfig.sidenavGroups || []).map((group) => {
      return {
        type: 'list',
        ...group,
      };
    }),
    routes: shellConfig.routes.map((route) => {
      return {
        ...route,
        data: {
          initialSidenavState: route.data?.initialSidenavState || 'spread',
          sidenavConfig: {
            icon: undefined,
            groupConfig: undefined,
            iconPosition: 'left',
            visible: true,
            ...route.data?.sidenavConfig,
          },
          toolbarConfig: {
            sidenavToggleVisible: true,
            visible: true,
            kind: 'default',
            toolbarUserOptionsVisible: true,
            ...route.data?.toolbarConfig,
          },
        },
      };
    }),
  };
  return def;
};
