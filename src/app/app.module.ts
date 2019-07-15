import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [EnvironmentUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
