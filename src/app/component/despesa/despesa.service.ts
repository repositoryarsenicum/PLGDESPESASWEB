import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DespesaModel } from './despesa.model';
import { environment } from 'src/environments/environment';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private PLGDESPESASAPI = environment.PLGDESPESASAPI;
  private despesaList = new BehaviorSubject<DespesaModel[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getDespesaList() {
    return this.despesaList;
  }

  public findAll(): Observable<DespesaModel[]> {
    return this.despesaList.asObservable();
  }

  public prepararConsultaBaseDados(): Observable<any> {
    return this.httpClient.get<DespesaModel[]>(this.PLGDESPESASAPI.concat("despesa")).pipe(
      tap(despesaResultado => {
        this.despesaList.next(despesaResultado);
      }));
  }

}
