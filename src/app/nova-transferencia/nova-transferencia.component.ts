import { TransferenciaService  } from '../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private transferenciaService:TransferenciaService) { }

  ngOnInit(): void {
  }

  transferir() {
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.transferenciaService.adicionar(valorEmitir).subscribe(res => {
      console.log(res);
    },
    (error) => console.error(error)
    );
  }

  limparTela(){
    this.valor = 0;
    this.destino = 0;
  }

}
