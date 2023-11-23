import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  { path: '', redirectTo: '/username', pathMatch: 'full' },
  { path: 'username', component: UsernameComponent },
  { path: 'password', component: PasswordComponent },
  {path:'dashboard',component:DashboardComponent},
  { path:'qrcode', component:QrcodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
