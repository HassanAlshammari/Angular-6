import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddskillComponent } from './addskill/addskill.component';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillComponent } from './myskill/myskill.component';
import { AllskillsComponent } from './allskills/allskills.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DetailsComponent } from './details/details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes:Routes=[
  {path:'' , redirectTo:'home' , pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'addskill', component:AddskillComponent },
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent },
  {path:'myskill', component: MyskillComponent},
  {path:'allskills', component:AllskillsComponent },
  {path:'details/:id', component:DetailsComponent},
  {path:'userprofile', component:UserProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddskillComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    AllskillsComponent,
    DetailsComponent,
    UserProfileComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
