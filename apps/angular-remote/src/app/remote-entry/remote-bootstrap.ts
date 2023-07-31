import 'zone.js'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RemoteEntryModule } from './entry.module';


declare global {
  interface Window {
    platform: any;
  }
}

// platformBrowserDynamic()
//   .bootstrapModule(RemoteEntryModule)
//   .catch((err) => console.error(err));

const ngVersion = pkg.dependencies['@angular/core'];
window.platform = window.platform || {};
let platform = window.platform[ngVersion];
if (!platform) {
  platform = platformBrowserDynamic();
  window.platform[ngVersion] = platform;
}
platform.bootstrapModule(RemoteEntryModule).catch((err: any) => console.error(err));

export { RemoteEntryModule };
