import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatMenuModule } from '@angular/material/menu';
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
