import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebBuildingComponent } from './components/web-building/web-building.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ORLComponent } from './components/orl/orl.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AlicanteCComponent } from './components/alicante-c/alicante-c.component';
import { SanvicenteCComponent } from './components/sanvicente-c/sanvicente-c.component';

@NgModule({
  declarations: [
    AppComponent,
    WebBuildingComponent,
    LoginTestComponent,
    HomeComponent,
    HeaderComponent,
    ORLComponent,
    ContactoComponent,
    AlicanteCComponent,
    SanvicenteCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
