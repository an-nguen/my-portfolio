import { InjectionToken, Provider } from "@angular/core";

export const DOCUMENT = new InjectionToken<Document>('DocumentToken');

export function provideDocument(): Provider[] {
  return [{
    provide: DOCUMENT,
    useFactory: () => {
      return globalThis.document ?? {} as Document
    }
  }];
}
