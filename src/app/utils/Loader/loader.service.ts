import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class loaderService {
  toast;
  alreadyDismissed;
  isLoading;

  constructor(
    public loadingCtrl: LoadingController,
  ) {  }



  async startLoaderMethod(msg) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg,
      cssClass: 'custom-loader-class',
      // duration: 5000,
      spinner: 'dots',
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() =>{
        });
        }
      });
    });
  }

  async stopLoaderMethod() {
    this.isLoading = false;
    await this.loadingCtrl.getTop().then(v => v ? this.loadingCtrl.dismiss() : null);
  }




}
