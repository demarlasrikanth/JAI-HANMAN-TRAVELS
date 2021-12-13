import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {UserRegisterComponent} from './user-register/user-register.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {BokkingComponent} from './bokking/bokking.component';
import {TabMenuModule} from "primeng/tabmenu";
import {AppRoutingModule} from "./app-routing.module";
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContactUsComponent} from './contact-us/contact-us.component';
import {DividerModule} from "primeng/divider";
import {AdminLoginComponent } from './admin-login/admin-login.component';
import { UserProfileComponent} from './user/user-profile/user-profile.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ReactiveFormsModule,} from "@angular/forms";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {HttpClientModule} from "@angular/common/http";
import { AdminDashboardComponent } from './admin-login/admin-dashboard/admin-dashboard.component';
import {MenuModule} from "primeng/menu";

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    BokkingComponent,
    ContactUsComponent,
    AdminLoginComponent,
    UserProfileComponent,
    AdminDashboardComponent,

  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    RippleModule,
    PasswordModule,
    RadioButtonModule,
    CalendarModule,
    DividerModule,
    AvatarModule,
    AvatarGroupModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    HttpClientModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
