import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import {HomeComponent} from "./home/home.component";
import {MatIconModule} from "@angular/material/icon";
import { CommentsComponent } from './comments/comments.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IndexComponent,
    CommentsComponent,
    ApresentacaoComponent,
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
