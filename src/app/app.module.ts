import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { UrxSessionModule } from 'ng-urxnium';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

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
    SharedModule
	],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
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
      useValue: 'dd - mm - yyyy'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
