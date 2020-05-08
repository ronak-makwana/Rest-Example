import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:'addEmployee',component:AddComponent},
  {path:'ListEmployee',component:ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
