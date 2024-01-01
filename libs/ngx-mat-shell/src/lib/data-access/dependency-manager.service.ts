import { Injectable, Injector, ProviderToken, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DependencyManagerService {
  injector = inject(Injector);

  resolveDependency<T>(dependency: ProviderToken<T>): T {
    return this.injector.get(dependency);
  }
}
