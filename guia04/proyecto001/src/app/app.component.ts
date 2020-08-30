import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'proyecto001';
  nombre: string = 'Rodriguez Pablo';
  edad: number = 10;
  email: string = 'rpablo@gmail.com';
  activo: boolean = true;
  sueldos: Array<number> = [1700, 1600, 1900];
  sitio: string = 'http://www.google.com';

  contador: number = 1;

  esActivo(): string {
    if (this.activo) return 'Trabajador Activo';
    else return 'Trabajador Inactivo';

  }

  ultimos3Sueldos(): number {
    let suma = 0;
    for (let sueldo of this.sueldos) {
      suma += sueldo;
    }
    return suma;
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }


}

