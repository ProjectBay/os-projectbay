import { ProviderToken } from '@angular/core';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';

export type NgxMatShellSidenavState = 'collapsed' | 'spread' | 'simple';

export interface NgxMatShellConfig {
  routes: NgxMatShellSidenavRoutes;
  sidenavGroups?: NgxMatShellSidenavGroup[];
  sidenavPosition?: 'start' | 'end';
  sidenavDefaultState?: NgxMatShellSidenavState;
  sidenavMode?: 'side' | 'over' | 'push';
  sidenavBackdrop?: boolean;
  sidenavHug?: 'full' | 'content';
  sidenavTabAnimationSpeed?: number;
  minWidth?: number;
}

export interface NgxMatShellRoute extends Route {
  data?: NgxMatShellViewData;
}
export type NgxMatShellSidenavRoutes = NgxMatShellRoute[];

export interface NgxMatShellViewData {
  initialSidenavState?: NgxMatShellSidenavState;
  toolbarConfig?: NgxMatShelltoolbarConfig;
  sidenavConfig?: NgxMatShellSidenavConfig;
}

export interface NgxMatShelltoolbarConfig {
  kind?: string;
  visible?: boolean;
  sidenavToggleVisible?: boolean;
}

export interface NgxMatShellSidenavConfig {
  title?: string | Observable<string>;
  titleFactory?: (...deps: any[]) => string | Observable<string>;
  titleDeps?: ProviderToken<any>[];
  titleAria?: string | Observable<string>;
  titleAriaFactory?: (...deps: any[]) => string | Observable<string>;
  titleAriaDeps?: ProviderToken<any>[];
  icon?: string | Observable<string>;
  iconPosition?: 'left' | 'right';
  visible?: boolean;
  groupConfig?: NgxMatShellSidenavGroupConfig;
}

// For view purpose only
export type NgxMatShellSidenavGroupView = NgxMatShellSidenavGroup & {
  routes: NgxMatShellRoute[];
};

// Navigation Groups
export interface NgxMatShellSidenavGroupConfig {
  groupIdentifier: string;
  order?: number;
}

export interface INgxMatShellSidenavGroup {
  identifier: string;
  title?: string | Observable<string>;
  titleFactory?: (...deps: any[]) => string | Observable<string>;
  titleDeps?: ProviderToken<any>[];
  type?: 'list' | 'accordion' | 'tab';
}

export interface NgxMatShellSidenavGroupList extends INgxMatShellSidenavGroup {
  type?: 'list';
}

export interface NgxMatShellSidenavGroupAccordion
  extends INgxMatShellSidenavGroup {
  type?: 'accordion';
  panelOpenState?: boolean;
}

export interface NgxMatShellSidenavGroupTab extends INgxMatShellSidenavGroup {
  type?: 'tab';
}

export type NgxMatShellSidenavGroup =
  | NgxMatShellSidenavGroupList
  | NgxMatShellSidenavGroupAccordion
  | NgxMatShellSidenavGroupTab;
