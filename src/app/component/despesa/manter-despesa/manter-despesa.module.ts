import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
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
    RouterModule.forChild(routes)
  ]
})
export class ManterDespesaModule { }
