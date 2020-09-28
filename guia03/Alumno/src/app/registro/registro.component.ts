import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente'





@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro = [];
  alumno: any;
  cliente:Cliente;
  contador: number;

  constructor() { }

  ngOnInit(): void {
    this.cliente.edad = 10;
    this.cliente.nombre = "";
    this.contador = 0;

  }
  ingresar() {
    console.log("entraste acá");
    console.log(this.cliente.edad);

    if (this.cliente.edad > 0 && this.cliente.edad < 18) {
      this.cliente.mayor = 'No';

    } else {
      this.cliente.mayor = 'Si';
    }

    this.alumno = { "nombre": this.cliente.nombre, "edad": this.cliente.edad, "mayor": this.cliente.mayor };

    console.log(this.alumno.nombre);
    this.registro.push(this.alumno);
    this.contador++;
  }

}
