import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { TestRequestModule } from './test-request/test-request-module';
import { ShoppingModule } from './shopping/shopping-module';
import { Account } from './account/account';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { Library } from './library/library';
import { Community } from './community/community';
import { Login } from './login/login';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    App,
    Account,
    NavBar,
    Library,
    Community,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
    ShoppingModule,
    NgOptimizedImage
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    providePrimeNG()

  ],
  bootstrap: [App]
})
export class AppModule { }
