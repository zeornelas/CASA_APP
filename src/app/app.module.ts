import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage, StockPage, TasksPage, TabsPage} from '../pages';
import {WhatsAppService} from "../shared/services/whatsapp.service";


let pages = [
  MyApp,
  HomePage,
  StockPage,
  TasksPage,
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
    WhatsAppService,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule {
}
