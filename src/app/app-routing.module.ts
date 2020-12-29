import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesaComponent } from './component/despesa/despesa.component';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "despesa",
  //   pathMatch: "full"
  // },
  {
    path: "despesa",
    loadChildren : "./component/despesa/despesa.module#DespesaModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
