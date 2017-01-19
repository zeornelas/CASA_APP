import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { StorageService } from "../../shared/services/storage.service";
import {TasksModal} from "../../components/modals/";

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  tasks = [];

  constructor(
    private navCtrl: NavController,
    private storage: StorageService
  ){}

  ionViewWillEnter(){
      console.log("ionWillENTER");
      this.getTasks();
  }

  getTasks(){
    this.tasks = this.storage.getTasks();
  }

  openModal(mode, index?, text?){
    this.navCtrl.push(TasksModal, {"mode": mode, "index": index, "inputText": text});
  }

  deleteTask(index){
    this.storage.deleteTask(index).then(data => {
      console.log("PAGE-TASK TASK DELETED: " + JSON.stringify(data));
      this.getTasks();
    }).catch(error => {
      console.error("PAGE-TASK ERROR TASK DELETED: " + JSON.stringify(error));

    });
  }

  editTask(index, text){
    this.openModal("edit", index, text);
  }



}


