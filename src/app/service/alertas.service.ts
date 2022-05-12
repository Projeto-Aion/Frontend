import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: string, tipo: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent) // a constante bsModalRef recebe a bsMOdalService para mostrar o component ALerta
    bsModalRef.content.type= tipo
    bsModalRef.content.message = message

  }

  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }

  showAlertSuccess(msg:string){
    this.showAlert(msg, 'success')
  }

  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }



}
