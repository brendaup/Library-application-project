import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCreationsComponent } from './my-creations.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MyCreationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCreationsRoutingModule { }
