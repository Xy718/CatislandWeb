import { MatCardModule } from '@angular/material/card';
import { IndexModule } from './index/index.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { IndexComponent } from './index/index.component';
import { MainPageComponent } from '../shared/components/main-page/main-page.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ACLGuard } from '@delon/acl';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {path: '',component: MainPageComponent,},
      {path: 'user', canActivate: [ ACLGuard ], data: { guard: 'USER' ,guard_url: '/'},component: UserPanelComponent,},
      {path: '403',component: Error403Component,data: { title: '403 Forbidden', titleI18n: '403 Forbidden' },},
      {path: '404',component: Error404Component,data: { title: '404 Not Found', titleI18n: '404 Not Found' },},
      {path: '500',component: Error500Component,data: { title: '500 Error', titleI18n: '500 Error' },},
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register',component: RegisterComponent},
    ],
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class IvoryRoutingModule {}
