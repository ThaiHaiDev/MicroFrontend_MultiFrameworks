// import { CommonModule } from '@angular/common';
// import { DoBootstrap, Injector, NgModule } from '@angular/core';
// import { createCustomElement } from '@angular/elements';
// import { RouterModule } from '@angular/router';
// import { RemoteEntryComponent } from './entry.component';
// import { remoteRoutes } from './entry.routes';
// import { NxWelcomeComponent } from './nx-welcome.component';
// @NgModule({
//   declarations: [RemoteEntryComponent, NxWelcomeComponent],
//   imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
//   providers: [],
// })
// export class RemoteEntryModule implements DoBootstrap {
//   constructor(private injector: Injector) {}
//   ngDoBootstrap() {
//     const webComponent = createCustomElement(RemoteEntryComponent, {
//       injector: this.injector,
//     });
//     customElements.define('angular-remote-root', webComponent);
//   }
// }
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'angular-remote',
        component: NxWelcomeComponent,
      }
    ]),
    FormsModule,
  ],
  providers: [],
})

export class RemoteEntryModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const webComponent = createCustomElement(RemoteEntryComponent, {
      injector: this.injector,
    });
    customElements.define('angular-remote-root', webComponent);
  }
}