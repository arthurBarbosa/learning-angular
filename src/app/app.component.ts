import { TransferenciaServiceService } from './services/transferenciaService.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferenciaServiceService: TransferenciaServiceService){}

  transferir($event){
    this.transferenciaServiceService.adicionar($event);
  }
}
