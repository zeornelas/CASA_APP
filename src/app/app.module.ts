import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { ElasticModule } from 'angular2-elastic';
import {MyApp} from './app.component';
import {HomePage, StockPage, TasksPage, TabsPage} from '../pages';
import {WhatsAppService} from "../shared/services/whatsapp.service";
import {StorageService} from "../shared/services/storage.service";
import {TasksModal} from "../components/modals";
import {FormsModule} from "@angular/forms";


let pages = [
  MyApp,
  HomePage,
  StockPage,
  TasksPage,
  TasksModal,
  TabsPage
];

export function declarations() {
  return pages;
}

export function entryComponents(){
  return pages;
}

export function providers() {
  return [
    StorageService,
    WhatsAppService,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    IonicModule.forRoot(MyApp),
    ElasticModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule {
}
