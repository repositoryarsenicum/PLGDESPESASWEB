import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaModel } from '../despesa.model';
import { ManterDespesaComponent } from './manter-despesa.component';

const routes: Routes = [
  {
    path: "", component: ManterDespesaComponent
  }
]

@NgModule({
  declarations: [ManterDespesaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DespesaModel
  ]
})
export class ManterDespesaModule { }
