import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DespesaModel } from '../despesa.model';
import { DespesaService } from './../despesa.service';

@Component({
  selector: 'app-manter-despesa',
  templateUrl: './manter-despesa.component.html',
  styleUrls: ['./manter-despesa.component.scss']
})
export class ManterDespesaComponent implements OnInit {

  public despesaFormulario: FormGroup;
  public isEditarCampo = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private despesaService: DespesaService,
    private despesaModel: DespesaModel) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has("codigo")) {
        this.isEditarCampo = true;
        this.despesaService.findOne(parseInt(paramMap.get("codigo"), 10)).subscribe(despesaResultado => {
          this.despesaModel = despesaResultado;
          console.log(despesaResultado);
          this.inicializarFormulario();
        });
      } else {
        this.inicializarFormulario();
      }
    });
  }

  inicializarFormulario() {
    this.despesaFormulario = new FormGroup({
      favorito: new FormControl(this.despesaModel !== null ? this.despesaModel.favorecido : null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      dataPagamento: new FormControl(this.despesaModel.dataPagamento !== null ? this.despesaModel.dataPagamento : null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      valorDespesa: new FormControl(this.despesaModel.valorDespesa !== null ? this.despesaModel.valorDespesa : null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      formaPagamento: new FormControl(this.despesaModel.formaPagamento !== null ? this.despesaModel.formaPagamento : null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      canalPagamento: new FormControl(this.despesaModel.canalPagamento !== null ? this.despesaModel.canalPagamento : null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      observacao: new FormControl(this.despesaModel.observacao !== null ? this.despesaModel.observacao : null, {
        updateOn: "blur",
        validators: [Validators.required]
      })
    });

  }

}
