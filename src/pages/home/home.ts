import {Component} from '@angular/core';
import { WhatsAppService } from '../../shared/services';

import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  daysOfTheWeek: string[] = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  constructor(private navCtrl: NavController, private whatsapp: WhatsAppService) {

  }


  checkIn() {
    let message = "CHECKIN: Equipa de " + this.getDayOfTheWeek() + "@ Restaurante Solidário - " + new Date().getHours() + ":" + new Date().getMinutes();
    this.whatsapp.send(message).then(()=>{
      console.log("Enviado");
    }).catch((err)=>{
      console.log(err);
    });
  }

  checkOut(){
    let message = "CHECKOUT: Equipa de " + this.getDayOfTheWeek() + "@ Restaurante Solidário - " + new Date().getHours() + ":" + new Date().getMinutes();
    this.whatsapp.send(message).then(()=>{
      console.log("Enviado");
    }).catch((err)=>{
      console.log(err);
    });
  }



  getDayOfTheWeek() {
    return this.daysOfTheWeek[new Date().getDay()];
  }
}
