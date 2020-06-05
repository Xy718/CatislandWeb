import { SwiperModule } from 'ngx-swiper-wrapper';
import { MaterialModule } from './../material.module';
import { UserPanelComponent } from 'src/app/shared/components/user-panel/user-panel.component';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './sessions/login/login.component';
import { IvoryRoutingModule } from './ivory-routing.module';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './sessions/register/register.component';
import { IndexComponent } from './index/index.component';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TopToolbarComponent } from '../shared/components/top-toolbar/top-toolbar.component';
import { FooterToolbarComponent } from '../shared/components/footer-toolbar/footer-toolbar.component';
import { MainPageComponent } from '../shared/components/main-page/main-page.component';

@NgModule({
  exports:[
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    IvoryRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    SwiperModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    TopToolbarComponent,
    FooterToolbarComponent,
    MainPageComponent,
    UserPanelComponent
  ]
})
export class IvoryModule { 
  
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far,fab);
 }
}
