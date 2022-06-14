import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{TableComponent }from'./component/table/table.component'

const routes: Routes = [
  
  {path:'',redirectTo:'/table', pathMatch:'full'},
  
  {path:'table',component:TableComponent},
  
  // {path:'Details/:proID',component:ShopingCartComponent},
  {path:'**',component:TableComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
