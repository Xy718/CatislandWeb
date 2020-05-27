import { IvoryRoutingModule } from './ivory/ivory-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule } from '@angular/material/toolbar';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';

import { DefaultInterceptor, StartupService } from './core';
import { IvoryModule } from './ivory/ivory.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
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
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      FontAwesomeModule,
      HttpClientModule,
      CoreModule,
      
      RouterModule,
      ReactiveFormsModule,
      SharedModule,
      ThemeModule,
      IvoryModule,
      IvoryRoutingModule
      ,MatCardModule
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
   constructor(library:FaIconLibrary){
      library.addIconPacks(fas,far,fab);
   }
}
