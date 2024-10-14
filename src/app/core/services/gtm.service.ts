import { afterNextRender, inject, Inject, Injectable, Injector, Optional } from '@angular/core';
import { DEFAULT_GTM_URL, GTM_ID_TOKEN, GTM_SCRIPT_EL_ID, GTM_URL_TOKEN } from '@core/constants';
import { DOCUMENT } from '@core/providers/document';
import { WINDOW } from '@core/providers/window';
import { BehaviorSubject, Observable } from 'rxjs';

interface DataLayerObject {
  event: string;
  [key: string]: string | number;
}

// The code from the link below was rewritten for SSR here
// https://github.com/mzuccaroli/angular-google-tag-manager
@Injectable({
  providedIn: 'root'
})
export class GTMService {

  public readonly isLoaded: Observable<boolean>;
  private readonly _isLoadedSubj = new BehaviorSubject<boolean>(false);

  private readonly _injector = inject(Injector);
  private readonly _doc = inject(DOCUMENT);
  private readonly _window = inject(WINDOW);
  private readonly _id = inject(GTM_ID_TOKEN);
  private readonly _gtmUrl = inject(GTM_URL_TOKEN, { optional: true });

  constructor() {
    this.isLoaded = this._isLoadedSubj.asObservable();
  }

  public addGTMScript(): void {
    afterNextRender({
      write: () => {
        if (this._isLoadedSubj.getValue()) {
          return;
        }

        this.pushOnDataLayer({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });

        const gtmScript: HTMLScriptElement = this._doc.createElement('script');
        gtmScript.id = GTM_SCRIPT_EL_ID;
        gtmScript.async = true;
        const queryParams = `?id=${this._id}`;
        const gtmUrl = this._gtmUrl || DEFAULT_GTM_URL;
        gtmScript.src = `${gtmUrl}${queryParams}`;
        gtmScript.addEventListener('load', () => {
          this._isLoadedSubj.next(true);
        });
        gtmScript.addEventListener('error', (e) => {
          this._isLoadedSubj.next(false);
          console.error('A Google Tag Manager script has been failed to load: ', e);
        });
        this._doc.head.insertBefore(gtmScript, this._doc.head.firstChild!);
      }
    }, { injector: this._injector });
  }

  public pushOnDataLayer(obj: DataLayerObject): void {
    afterNextRender({
      read: () => {
        const dataLayer = this._getDataLayer();
        dataLayer.push(obj);
      },
    }, { injector: this._injector });
  }

  private _getDataLayer(): any[] {
    const window = this._window as any;
    window.dataLayer = window.dataLayer || [];
    return window.dataLayer;
  }

}
