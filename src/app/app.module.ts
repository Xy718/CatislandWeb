import { IvoryRoutingModule } from './ivory/ivory-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';

import { DefaultInterceptor, StartupService } from './core';
import { IvoryModule } from './ivory/ivory.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { GlobalConfigModule } from './global-config.module';

export function StartupServiceFactory(startupService: StartupService) {
   return () => startupService.load();
 }
@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      CoreModule,
      GlobalConfigModule.forRoot(),
      RouterModule,
      ReactiveFormsModule,
      SharedModule,
      ThemeModule,
      IvoryModule,
      IvoryRoutingModule
   ],
   providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: DefaultInterceptor,
        multi: true,
      },
      StartupService,
      {
         provide: APP_INITIALIZER,
         useFactory: StartupServiceFactory,
         deps: [StartupService],
         multi: true,
      },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { 
   constructor(){
      if(!environment.production){
         console.log('dev!');
      }
   }
}
