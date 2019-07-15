import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'register', component: RegisterComponent },
  { path:'signup', component: SignupComponent },
  { path:'forgetpwd', component:  ForgetpwdComponent },
  { path:'mainpage', component: MainPageComponent },
  { path:'resetpwd', component:  ResetpwdComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[RegisterComponent,SignupComponent,HomeComponent,ForgetpwdComponent,ResetpwdComponent,MainPageComponent]; 
