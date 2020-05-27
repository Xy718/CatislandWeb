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
import { MatButtonModule, MatButton } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TopToolbarComponent } from 'src/app/shared/components/top-toolbar/top-toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { UserPanelComponent } from 'src/app/shared/components/user-panel/user-panel.component';
@NgModule({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    FontAwesomeModule,
    MatButtonModule,
    SharedModule,
  ],
  declarations: [
    Error404Component
    , Error403Component
    , Error500Component
  ]
})
export class IndexModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far,fab);
 }
}
