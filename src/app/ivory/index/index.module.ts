import { SwiperModule } from 'ngx-swiper-wrapper';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Error404Component } from '../sessions/404.component';
import { Error403Component } from '../sessions/403.component';
import { Error500Component } from '../sessions/500.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification/public-api';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzAffixModule } from 'ng-zorro-antd/affix';
@NgModule({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    FontAwesomeModule,
    SharedModule,
    SwiperModule,
    NzAvatarModule,
    NzAffixModule,
  ],
  declarations: [
    Error404Component
    , Error403Component
    , Error500Component
  ],
  providers: [
    NzNotificationService]
})
export class IndexModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
 }
}
