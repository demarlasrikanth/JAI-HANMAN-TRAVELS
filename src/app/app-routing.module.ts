import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {BokkingComponent} from "./bokking/bokking.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {AdminDashboardComponent} from "./admin-login/admin-dashboard/admin-dashboard.component";
import {UsersDataComponent} from "./admin-login/users-data/users-data.component";


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
  },
  {
    path:'userProfile/:id',
    component:UserProfileComponent
  },
  {
    path:'dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'users',
    component:UsersDataComponent
  }


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
