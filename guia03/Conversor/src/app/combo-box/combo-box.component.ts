import { Component, OnInit } from '@angular/core';

//Agregar los siguientes modulos
//import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  unidades: Array<string>;
  opcionSeleccionada: string;
  valorcm: number;
  valorConversion: number;

  constructor() { }

  ngOnInit(): void {
    //inicializar variables
    this.unidades = ["Pulgada", "Metro", "Kilometro"];
    this.opcionSeleccionada = "Seleccionada";
    this.valorcm = 0;
    this.valorConversion = 0;

  }

  //funcion que realiza los calculos

  capturar() {
    switch (this.opcionSeleccionada) {
      case 'Pulgada':
        this.valorConversion = this.valorcm * 0.39370;
        break;
      case 'Metro':
        this.valorConversion = this.valorcm / 100;
        break;
      case 'Kilometro':
        this.valorConversion = this.valorcm / 1000;
        break;
      default:
        break;
    }

  }

}
