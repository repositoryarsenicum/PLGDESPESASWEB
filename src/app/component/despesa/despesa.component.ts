import { Component, OnInit } from '@angular/core';
import { DespesaService } from './despesa.service';
import { DespesaModel } from './despesa.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss']
})
export class DespesaComponent implements OnInit {

  private despesaList: DespesaModel[];
  private subscribeResult: Subscription;

  constructor(private despesaService: DespesaService) { }

  ngOnInit(): void {
    this.subscribeResult = this.despesaService.getDespesaList().subscribe( produtoResultadoList => {
      this.despesaList = produtoResultadoList;
    });
    this.despesaService.prepararConsultaBaseDados().subscribe();
  }

  ngDestroy() {
    if(this.subscribeResult) {
      this.subscribeResult.unsubscribe();
    }
  }

  public getDespesaList() {
    return this.despesaList;
  }

}
