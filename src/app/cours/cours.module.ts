import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { ProgramamtionComponent } from './programamtion/programamtion.component';
import { WebComponent } from './web/web.component';
import { CoursComponent } from './cours.component';


@NgModule({
  declarations: [
    CoursComponent,
    ProgramamtionComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
