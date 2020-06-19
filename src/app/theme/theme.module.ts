import { MaterialModule } from 'src/app/material.module'
import { NgModule } from '@angular/core';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { CustomizerComponent } from './customizer/customizer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    CustomizerComponent
  ],
  imports: [
    SharedModule,
    MaterialModule
  ],
})
export class ThemeModule {}
