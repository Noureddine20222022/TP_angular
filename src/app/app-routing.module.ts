import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceilComponent } from './acceil/acceil.component';
import { ContactComponent } from './contact/contact.component';
import { CoursComponent } from './cours/cours.component';
import { ProgramamtionComponent } from './Cours/programamtion/programamtion.component';
import { WebComponent } from './Cours/web/web.component';
import { ErreurComponent } from './erreur/erreur.component';


import { RessourceComponent } from './ressource/ressource.component';

const routes: Routes = [
  {path :'',component:AcceilComponent},
  {path :'Acceil',component:AcceilComponent},
  {path :'Cours',component:CoursComponent},
  {path :'Ressource',component:RessourceComponent},
  {path :'Contact',component:ContactComponent},
  {path :'Programmation',component:ProgramamtionComponent},
  {path :'Web',component:WebComponent},
  {path :'**',component:ErreurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
