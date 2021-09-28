import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaServiceService {
 private listaTransferencias: any[];

 constructor() {
  this.listaTransferencias = [];
 }

 get transferencias(){
   return this.listaTransferencias;
 }

 adicionar(transferencia: any){
  this.configuraRegra(transferencia);
  this.listaTransferencias.push(transferencia);
 }

 private configuraRegra(transferencia: any){
  transferencia.data = new Date();
 }

}
