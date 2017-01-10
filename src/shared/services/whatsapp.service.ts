import {Injectable} from "@angular/core";
import {SocialSharing} from 'ionic-native';

@Injectable()
export class WhatsAppService {
  constructor() {
  }

  send(message) {
    return new Promise((resolve, reject) => {
      SocialSharing.shareViaWhatsApp(
        message
      ).then(() => {
        resolve();
      }).catch((err) => {
          reject(err);
        });

    });
  }
}
