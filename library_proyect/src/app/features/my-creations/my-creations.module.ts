import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCreationsRoutingModule } from './my-creations-routing.module';
import { MyCreationsComponent } from './my-creations.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MyCreationsComponent
  ],
  imports: [
    CommonModule,
    MyCreationsRoutingModule,
    RouterModule,
    SharedModule,
    
  ],
  exports:[
    MyCreationsComponent
  ]
  
})
export class MyCreationsModule { }
