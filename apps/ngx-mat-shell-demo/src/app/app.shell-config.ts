import { NgxMatShellConfig } from '@projectbay/ngx-mat-shell';
import { FeedComponent } from './views/feed.component';
import { LandingComponent } from './views/landing.component';
import { PrivacyComponent } from './views/privacy.component';
import { SettingsComponent } from './views/settings.component';
import { TranslationService } from './translation.service';

export enum ToolbarIds {
  DEFAULT = 'default',
  SPECIAL = 'special',
}

export const ShellConfig: NgxMatShellConfig = {
  minWidth: 240,
  sidenavDefaultState: 'spread',
  sidenavTabAnimationSpeed: 200,
  sidenavPosition: 'start',
  sidenavGroups: [
    {
      identifier: 'general',
      title: 'General',
      type: 'accordion',
    },
    {
      identifier: 'settings',
      title: 'Settings',
    },
    {
      identifier: 'more',
      title: 'More',
      type: 'tab',
    },
  ],
  routes: [
    {
      path: '',
      component: LandingComponent,
      data: {
        sidenavConfig: {
          titleFactory: (service: TranslationService) =>
            service.getTranslation('key'),
          titleDeps: [TranslationService],
          icon: 'home',
          iconPosition: 'left',
          titleAria: 'Home page',
          groupConfig: {
            groupIdentifier: 'general',
          },
        },
        toolbarConfig: {
          kind: 'special',
        },
      },
    },
    {
      path: 'settings',
      component: SettingsComponent,
      data: {
        sidenavConfig: {
          title: 'Settings',
          icon: 'settings',
          iconPosition: 'left',
          titleAria: 'Home page',
          groupConfig: {
            groupIdentifier: 'settings',
          },
        },
      },
    },
    {
      path: 'feed',
      component: FeedComponent,
      data: {
        sidenavConfig: {
          title: 'Feed',
          icon: 'density_small',
          iconPosition: 'left',
          titleAria: 'Home page',
          groupConfig: {
            groupIdentifier: 'general',
          },
        },
      },
    },
    {
      path: 'customers',
      component: LandingComponent,
      data: {
        sidenavConfig: {
          title: 'Customers',
          icon: 'group',
          iconPosition: 'left',
          titleAria: 'Home page',
          visible: false,
          groupConfig: {
            groupIdentifier: 'settings',
          },
        },
        toolbarConfig: {
          sidenavToggleVisible: false,
        },
      },
    },
    {
      path: 'privacy',
      component: PrivacyComponent,
      data: {
        sidenavConfig: {
          title: 'Privacy',
          icon: 'zoom_in',
          iconPosition: 'left',
          titleAria: 'Home page',
          groupConfig: {
            groupIdentifier: 'more',
          },
        },
        toolbarConfig: {
          visible: false,
          sidenavToggleVisible: false,
        },
      },
    },
  ],
};
