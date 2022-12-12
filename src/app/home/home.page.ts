import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }
    
    this.imc = this.weight / (this.height * this.height)
    this.showIMC()
  }

  async showIMC() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - ${this.classificacao()}`,
      duration: 3000,
      color: 'secondary'
    })
    
    toast.present()

  }

  classificacao(): string {
    if (this.imc < 18.5) {
      return "MAGREZA"
    } else if (this.imc < 25) {
      return "NORMAL"
    } else if (this.imc < 30) {
      return "SOBREPESO"
    } else if (this.imc < 40) {
      return "OBESIDADE"
    } else {
      return "OBESIDADE GRAVE"
    }
  }

}
