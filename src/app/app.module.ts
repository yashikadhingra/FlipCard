import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './components/_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { AppComponent }  from './app.component';
import { routing}  from './components/app.routing';
import { UserComponent }  from './components/user.component';
import { GameComponent }  from './components/game.component';
import { ProfileComponent }  from './components/profile/profile.component';
import { AlertComponent } from './components/_directives/index';
import { AuthGuard } from './components/_guards/index';
import { AlertService, AuthenticationService, UserService } from './components/_services/index';
import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { RegisterComponent } from './components/register/index';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,routing ],
  declarations: [ AppComponent,UserComponent,GameComponent,HomeComponent,ProfileComponent,AlertComponent, LoginComponent,
        RegisterComponent],
providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
 
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
