import { DependencyManagerService } from '../data-access/dependency-manager.service';
import {
  NgxMatShellSidenavGroup,
  NgxMatShellSidenavGroupView,
  NgxMatShellSidenavRoutes,
} from '../data-access/shell.model';
import { resolveRouteTitle } from './routeTitleResolver';

export const mapSidenavGroupResolver = (
  group: NgxMatShellSidenavGroup,
  routes: NgxMatShellSidenavRoutes,
  dependencyManager: DependencyManagerService
): NgxMatShellSidenavGroupView => {
  return {
    ...resolveGroupTitle(group, dependencyManager),
    routes: routes
      .filter(
        (route) =>
          route.data?.sidenavConfig?.groupConfig?.groupIdentifier ===
          group.identifier
      )
      .map((route) => {
        if (route.data?.sidenavConfig) {
          const sidenavConfig = resolveRouteTitle(
            route.data.sidenavConfig,
            dependencyManager
          );
          route.data.sidenavConfig = sidenavConfig;
          return route;
        }
        return route;
      })
      .sort((a, b) => {
        const aOrder = a.data?.sidenavConfig?.groupConfig?.order || 0;
        const bOrder = b.data?.sidenavConfig?.groupConfig?.order || 0;
        if (aOrder > bOrder) return 1;
        else if (aOrder < bOrder) return -1;
        return 0;
      }),
  };
};

export const resolveGroupTitle = (
  group: NgxMatShellSidenavGroup,
  dependencyManager: DependencyManagerService
) => {
  if (group.title === undefined && group.titleFactory !== undefined) {
    if (group.titleDeps !== undefined) {
      const dependencies = group.titleDeps.map((deps) =>
        dependencyManager.resolveDependency(deps)
      );
      let title;
      try {
        title = group.titleFactory(...dependencies);
      } catch (e) {
        throw new Error(
          'NgxMatShell Error: dependency missing for groupTitleFactory'
        );
      }
      return {
        ...group,
        groupTitle: title,
      };
    } else {
      let title;
      try {
        title = group.titleFactory();
      } catch (e) {
        throw new Error(
          'NgxMatShell Error: Could not resolve groupTitleFactory. Are you missing dependencies?'
        );
      }
      return {
        ...group,
        groupTitle: title,
      };
    }
  } else {
    return group;
  }
};
