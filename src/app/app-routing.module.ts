import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
const routes: Routes = [{path:'list',component:ListEmployeesComponent},
{path:'create',component:CreateemployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
