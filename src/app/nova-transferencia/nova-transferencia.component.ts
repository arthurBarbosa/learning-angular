import { TransferenciaService  } from '../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number;
  destino: number;

  constructor(private transferenciaService:TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.transferenciaService.adicionar(valorEmitir).subscribe(res => {
      console.log(res);
      this.limparTela();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
  }

  limparTela(){
    this.valor = 0;
    this.destino = 0;
  }

}
