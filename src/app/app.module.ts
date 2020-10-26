import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from "@angular/forms"; 

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserProfileComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }