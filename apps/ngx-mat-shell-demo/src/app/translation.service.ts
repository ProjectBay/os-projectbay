import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  instant(_key: string) {
    return 'TranslationValue';
  }

  getTranslation(_key: string) {
    return of('TranslationValue');
  }
}
