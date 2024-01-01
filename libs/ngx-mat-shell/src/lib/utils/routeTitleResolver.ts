import { DependencyManagerService } from '../data-access/dependency-manager.service';
import { NgxMatShellSidenavConfig } from '../data-access/shell.model';

export const resolveRouteTitle = (
  route: NgxMatShellSidenavConfig,
  dependencyManager: DependencyManagerService
) => {
  if (route.title === undefined && route.titleFactory !== undefined) {
    if (route.titleDeps !== undefined) {
      const dependencies = route.titleDeps.map((deps) =>
        dependencyManager.resolveDependency(deps)
      );
      let title;
      try {
        title = route.titleFactory(...dependencies);
      } catch (e) {
        throw new Error(
          'NgxMatShell Error: dependency missing for sidenavTitleFactory'
        );
      }
      return {
        ...route,
        title: title,
      };
    } else {
      let title;
      try {
        title = route.titleFactory();
      } catch (e) {
        throw new Error(
          'NgxMatShell Error: Could not resolve sidenavTitleFactory. Are you missing dependencies?'
        );
      }
      return {
        ...route,
        title: title,
      };
    }
  } else {
    return route;
  }
};
