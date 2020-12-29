import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaComponent } from './despesa.component';
import { Routes, RouterModule } from '@angular/router';
import { ManterDespesaComponent } from './manter-despesa/manter-despesa.component';
import { ManterDespesaModule } from './manter-despesa/manter-despesa.module';

const routes: Routes = [
  { path: "", component : DespesaComponent },
  { path: "cadastrar-despesa", loadChildren: "./manter-despesa/manter-despesa.module#ManterDespesaModule" }
];

@NgModule({
  declarations: [DespesaComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class DespesaModule { }
