import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DespesaComponent } from './despesa.component';

const routes: Routes = [
  { path: "", component : DespesaComponent },
  { path: "cadastrar-despesa", loadChildren: "./manter-despesa/manter-despesa.module#ManterDespesaModule" },
  { path: ":codigo", loadChildren: "./manter-despesa/manter-despesa.module#ManterDespesaModule" }
];

@NgModule({
  declarations: [DespesaComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DespesaModule { }
