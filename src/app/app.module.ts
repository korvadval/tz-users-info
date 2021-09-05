import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const appRoutes: Routes=[
  {path:"", component:ListOfUsersComponent},
  {path:"userInfo", component:UserInfoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListOfUsersComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
