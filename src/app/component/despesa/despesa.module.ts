import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaComponent } from './despesa.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component : DespesaComponent
  }
];

@NgModule({
  declarations: [DespesaComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class DespesaModule { }
