import { InjectionToken, Provider } from "@angular/core";

export const WINDOW = new InjectionToken<Window>('WindowToken');

export function provideWindow(): Provider[] {
  return [{
    provide: WINDOW,
    useFactory: () => {
      return globalThis.window ?? {} as Window
    }
  }];
}
