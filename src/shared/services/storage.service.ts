import {NativeStorage} from 'ionic-native';
import {Injectable} from '@angular/core';

@Injectable()

export class StorageService {
  tasks: any;
  stocks: any;

  constructor() {
  }


  init() {
    NativeStorage.getItem("tasks").then(data => {
      console.log("DB - Tasks already created");
      this.tasks = data;
    }).catch(error => {
      console.log("error: " + JSON.stringify(error));
      if (error.code == 2 || error.code.code == 2) {
        NativeStorage.setItem("tasks", []).then(data => {
          console.log("DB - Tasks created");
          this.tasks = data;
        }).catch(error => {
          console.log("DB - Error creating tasks: " + JSON.stringify(error));

        });
      }
    });

    NativeStorage.getItem("stocks").then(data => {
      console.log("DB - Stocks already created");
      this.stocks = data;
    }).catch(error => {
      console.log("error: " + JSON.stringify(error));
      if (error.code == 2 || error.code.code == 2) {
        NativeStorage.setItem("tasks", []).then(data => {
          console.log("DB - Stocks created");
          this.tasks = data;
        }).catch(error => {
          console.log("DB - Error creating stocks: " + JSON.stringify(error));
        });
      }
    });
  }

  saveTasksToNativeStorage(): Promise<any> {
    return new Promise((resolve, reject) => {
      NativeStorage.setItem("tasks", this.tasks).then(data => {
        console.log("DB - Tasks saved");
        this.tasks = data;
        resolve(this.tasks);
      }).catch(error => {
        console.log("DB - Error savings tasks: " + JSON.stringify(error));
        reject(error);
      });
    });
  }

  createTask(text): Promise<any> {
    return new Promise((resolve, reject) => {
      if (text.length == 0) {
        reject({error: "INPUT_INVALID"});
      } else {
        this.tasks.push({text: text, value: false});
        this.saveTasksToNativeStorage().then((data) => {
          console.log("DB - Task created");
          resolve(data);
        }).catch(error => {
          console.log("DB - Error creating task: " + JSON.stringify(error));
          reject(error);
        })
      }
    });
  }

  getTasks() {
    return this.tasks;
  }

  editTask(index, text): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tasks[index].text = text;
      this.saveTasksToNativeStorage().then((data) => {
        console.log("DB - Task edited");
        resolve(data);
      }).catch(error => {
        console.log("DB - Error editing task: " + JSON.stringify(error));
        reject(error);
      })
    });
  }

  deleteTask(index): Promise<any>{
    return new Promise((resolve, reject) => {
      this.tasks.splice(index, 1);
      this.saveTasksToNativeStorage().then((data) => {
        console.log("DB - Task deleted");
        resolve(data);
      }).catch(error => {
        console.log("DB - Error deleting task: " + JSON.stringify(error));
        reject(error);
      })
    });
  }

  resetTasks(): Promise<any>{
    return new Promise((resolve, reject) => {
      for(var task of this.tasks){
        task.value = false;
      }

      this.saveTasksToNativeStorage().then((data) => {
        console.log("DB - Tasks reset");
        resolve(data);
      }).catch(error => {
        console.log("DB - Error reseting tasks: " + JSON.stringify(error));
        reject(error);
      })
    });
  }


}
