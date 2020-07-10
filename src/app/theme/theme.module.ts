import { MaterialModule } from 'src/app/material.module'
import { NgModule } from '@angular/core';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule
  ],
})
export class ThemeModule {}
