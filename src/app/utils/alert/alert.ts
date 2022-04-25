import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  toast;
  alreadyDismissed;
  isLoading;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
  ) {  }

  async presentAlert(title, message, button?, keyboard?) {
    const btn  = button !== undefined ? button : button !== null ? button : button === undefined ? 'Dismiss' : 'Dismiss';

    const alert = await this.alertCtrl.create({
      header : title,
      subHeader: message,
      buttons: ['Okay'],
      cssClass: 'custom-alert-class',
      translucent: true,
      animated: true,
      keyboardClose: keyboard
    });
    alert.present();
  }


  


/** display toast message */
   displayToastMsg(msg: string, position?: string, time?: number) {
      if (time === undefined || null) {
        time = 5000;
      }
      const toast = this.toastCtrl.create({
        message: msg,
        duration: time,
        position: 'bottom',
        keyboardClose: true
      }).then((toastData) => {
        toastData.present();
      });
  }
  
 /** dismiss toast message */
  dismissToast() {
    this.toast = this.toastCtrl.dismiss();

  }

  /** confirming from the user */

  async confirmUserRequest(message, header, okayButtonText?, cancelButtonText?) {
    let choice;
    const cancelButton = cancelButtonText === !null || cancelButtonText === !undefined ? 'Cancel' : cancelButtonText ;
    const okayButton = okayButtonText === null || cancelButtonText === !undefined ? 'Okay' : okayButtonText;
    const alert = await this.alertCtrl.create({
      header:   `${header}`,
      message: `${message}`,
      cssClass: 'custom-alert-class',
      buttons: [
        {
          text: `${cancelButton}`,
          role: 'false',
          cssClass: 'secondary',
          handler: (blah) =>  {
            alert.dismiss(false);
            return false;

          }
        }, {
          text: `${okayButton}`,
          role: 'true',
          handler: (b) => {
            alert.dismiss(true);
            return true;
          }
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
        choice = data;
    });
    return choice;
  }

 


}
