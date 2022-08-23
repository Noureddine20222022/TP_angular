import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceilComponent } from './acceil/acceil.component';
import { CoursComponent } from './cours/cours.component';
import { RessourceComponent } from './ressource/ressource.component';
import { ContactComponent } from './contact/contact.component';
import { ProgramamtionComponent } from './Cours/programamtion/programamtion.component';
import { WebComponent } from './Cours/web/web.component';
import { NavComponent } from './nav/nav.component';
import { ErreurComponent } from './erreur/erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceilComponent,
    CoursComponent,
    RessourceComponent,
    ContactComponent,
    ProgramamtionComponent,
    WebComponent,
    NavComponent,
    ErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
