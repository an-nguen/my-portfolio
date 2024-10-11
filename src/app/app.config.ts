import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { environment } from '../environments/environment';
import { provideWindow } from '@core/providers/window';
import { provideDocument } from '@core/providers/document';
import { GTM_ID_TOKEN, GTM_URL_TOKEN } from '@core/constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
    provideHighlightOptions({
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml')
      }
    }),
    { provide: GTM_ID_TOKEN, useValue: environment.gtmId },
    { provide: GTM_URL_TOKEN, useValue: environment.gtmUrl },
    provideWindow(),
    provideDocument(),
  ],
};
