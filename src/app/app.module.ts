import { IvoryRoutingModule } from './ivory/ivory-routing.module';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';

import { DefaultInterceptor, StartupService } from './core';
import { IvoryModule } from './ivory/ivory.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { GlobalConfigModule } from './global-config.module';
import { DelonAuthModule, JWTInterceptor } from '@delon/auth';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { DelonCacheModule } from '@delon/cache';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

// 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];


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
      IvoryRoutingModule,
      DelonAuthModule,
      NzMessageModule,
      NzNotificationModule,
      DelonCacheModule,
      NzIconModule.forRoot(icons),
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
      { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
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
