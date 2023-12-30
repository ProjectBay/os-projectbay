import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  instant(key: string) {
    return 'TranslationValue';
  }

  getTranslation(key: string) {
    return of('TranslationValue');
  }
}
