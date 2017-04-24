import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequestComponent } from './request/request.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequestComponent,
    HomeComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
