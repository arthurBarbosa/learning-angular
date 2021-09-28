import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

 url = 'http://localhost:3000/transferencias';

 private listaTransferencias: any[];

 constructor(private httpClient: HttpClient) {
  this.listaTransferencias = [];
 }

 get transferencias(){
   return this.listaTransferencias;
 }

 getAllTransferencias(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
 }

 adicionar(transferencia: Transferencia): Observable<Transferencia>{
  this.configuraRegra(transferencia);
  return this.httpClient.post<Transferencia>(this.url, transferencia);
 }

 private configuraRegra(transferencia: any){
  transferencia.data = new Date();
 }

}
