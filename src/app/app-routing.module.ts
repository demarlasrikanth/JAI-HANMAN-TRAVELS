import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {BokkingComponent} from "./bokking/bokking.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";


const routes:Routes =[

  {
    component:UserLoginComponent,
    path:'login'
  },
  {
    component: UserRegisterComponent,
    path: 'register'
  },
  {

    path: 'booking',
    component: BokkingComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'adminLogin',
    component:AdminLoginComponent
  }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
