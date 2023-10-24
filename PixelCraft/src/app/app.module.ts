import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/panel/navbar/navbar.component';
import { FooterComponent } from './component/panel/footer/footer.component';
import { HomeComponent } from './component/principal/home/home.component';
import { IntroComponent } from './component/principal/intro/intro.component';
import { ContactoComponent } from './component/principal/contacto/contacto.component';
import { JuegosComponent } from './component/principal/juegos/juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    ContactoComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    ContactoComponent,
    JuegosComponent],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
