import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([
    {
      path: 'angular-remote',
      component: NxWelcomeComponent,
    },
  ])],
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