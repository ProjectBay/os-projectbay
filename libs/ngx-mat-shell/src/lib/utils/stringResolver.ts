import { Observable, of } from 'rxjs';

export const asStringObservable = (
  value: string | Observable<string> | undefined
): Observable<string> => {
  if (typeof value === 'string') {
    return of(value);
  }
  return value || of('Error');
};
