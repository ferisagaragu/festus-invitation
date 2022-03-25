import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';

import { UrxGridModule, UrxSessionModule } from 'ng-urxnium';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

registerLocaleData(localeEsMx);

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
    UrxSessionModule,
    UrxGridModule,
    SharedModule
	],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX'
    },{
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'MXN'
    },{
      provide: 'baseUrl',
      useValue: environment.baseUrl
    },{
      provide: 'authRoute',
      useValue: {
        authorized: 'auth',
        unauthorized: 'event'
      }
    },{
      provide: 'validateTokenUrl',
      useValue: environment.validateTokenUrl
    },{
      provide: 'refreshTokenUrl',
      useValue: environment.refreshTokenUrl
    },{
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },{
      provide: MAT_DATE_FORMATS,
      useValue: 'dd - mmm - yyyy'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
