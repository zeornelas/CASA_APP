import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { StorageService } from "../../../shared/services";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'task-modal',
  templateUrl: 'task.modal.html'
})

export class TasksModal{
  mode: string;
  index: number;
  inputText: string = null;

  taskDescription: FormControl;
  form: FormGroup;

  constructor(
    private storage: StorageService,
    private navCtrl: NavController,
    private navParams: NavParams,
    private fb: FormBuilder
  ) {
    this.mode = this.navParams.get('mode');
    this.index = this.navParams.get('index');
    this.inputText = this.navParams.get('inputText');

    this.taskDescription = new FormControl(this.inputText, Validators.required);

    this.form = fb.group({
      "taskDescription": this.taskDescription
    });
  }


  dismiss() {
    this.navCtrl.pop();
  }

  saveTask(){
    console.log("HEYYYYYY: " +  this.taskDescription.value);
    if(this.index >= 0){
      this.storage.editTask(this.index, this.taskDescription.value).then((task) => {
        console.log("TASK-MODAL TASK EDITED: " + JSON.stringify(task));
        this.form.reset();
        this.navCtrl.pop();
      }).catch(error => {
        console.error("TASK-MODAL ERROR CREATETASK: " + JSON.stringify(error));
      });
    }else{
      this.storage.createTask(this.taskDescription.value).then((task) => {
        console.log("TASK-MODAL TASK ADDED: " + JSON.stringify(task));
        this.form.reset();
        this.navCtrl.pop();
      }).catch(error => {
        console.error("TASK-MODAL ERROR CREATETASK: " + JSON.stringify(error));
      });
    }
  }
}
