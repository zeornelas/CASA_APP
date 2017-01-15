import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  tasks: any[] = [
    {
      text: "Verificar a limpeza da casa de banho.",
      state: false
    },
    {
      text: "Levantar o pão.",
      state: false
    },
    {
      text: "Separar e servir os itens com prazo de validade (ou condição) a expirar.",
      state: false
    },
    {
      text: "Enrolar os talheres em guardanapos..",
      state: false
    },
    {
      text: "Lavar e encher as garrafas de água.",
      state: false
    },
    {
      text: "Limpar as mesas com desengordurante.",
      state: false
    },
    {
      text: "Colocar as cadeiras em cima da mesa.",
      state: false
    },
    {
      text: "Lavar a louça.",
      state: false
    },
    {
      text: "Lavar os contentores dos carros da comida.",
      state: false
    },
    {
      text: "Verificar que não foi deixada louça nos carros da comida.",
      state: false
    },
    {
      text: "Desligar os carros da comida da ficha.",
      state: false
    },
    {
      text: "Limpar o carro dos tabuleiros.",
      state: false
    },
    {
      text: "Varrer e passar a esfregona.",
      state: false
    },
    {
      text: "Organizar o armazém e completar os stocks (organizar itens por data de validade).",
      state: false
    },
    {
      text: "Colocar todas as coisas que necessitem no frigorífico.",
      state: false
    },
    {
      text: "Colocar o telemóvel a carregar.",
      state: false
    },
    {
      text: "Fechar as janelas.",
      state: false
    },
    {
      text: "Desligar a máquina da louça e apagar as luzes.",
      state: false
    },
    {
      text: "Despejar o lixo.",
      state: false
    },
    {
      text: "Colocar a chave na caixa de correio.",
      state: false
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
