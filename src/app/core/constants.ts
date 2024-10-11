import { InjectionToken } from "@angular/core";

export const GTM_ID_TOKEN = new InjectionToken<string>('GoogleTagManagerId');
export const GTM_URL_TOKEN = new InjectionToken<string>('GoogleTagManagerUrl');
export const GTM_SCRIPT_EL_ID = 'gtm-script';
export const DEFAULT_GTM_URL = 'https://www.googletagmanager.com';
