import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curdAngular';

  //areglo del tipo Alumno que tiene 3 registros almacenados
  alumnoArray: Alumno[] = [
    { id: 1, name: "Alex", lastname: "Campos", age: 35 },
    { id: 2, name: "Maria", lastname: "Lopez", age: 20 },
    { id: 3, name: "Juan", lastname: "Castro", age: 25 }
  ];


  //atributo selecAlumno del tipo Alumno por lo tanto puede almacenar un objeto de tipo alumno

  selectedAlumno: Alumno = { id: 0, name: " ", lastname: " ", age: 0 };

  //un metodo que no retorna nada "void", recibe como párametro una variable del 
  //tipo Alumno, para ser asignada al atributo selectedAlumno y poder ser mostrado
  //en pantalla

  openForEdit(alumno: Alumno): void {
    this.selectedAlumno = alumno;
  }
  //meotodo que no retorna nada "void" NO recibe parametro, pero realiza dos
  //operaciones agregar / editar, si no hay registro seleccionado se guarda,
  // de lo contrario limpia el atributo selectedAlumno en pantalla. [(ngModel)]

  addOrEdit(): void {
    if (this.selectedAlumno.id === 0) //Insert
    {
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
    }

    this.selectedAlumno = { id: 0, name: " ", lastname: " ", age: 0 };
  }

  //metodo que no retorna nada "void", No recibe parametro, elimina del arreglo el registro.
  //pero antes muestra en pantalla un confirmar, se recorre el arreglo
  //realinzando un "filter" para no almacenar el registro seleccionado en el nuevo arreglo "alumnoArray"
  //por eso ocupamos el operador !==  y luego limpiamos el registro seleccionado

  delete(): void {
    if (confirm('Esta seguro de eliminar el Registro?')) {
      this.alumnoArray = this.alumnoArray.filter(x => x !== this.selectedAlumno);
      this.selectedAlumno = {id:0, name:" ",lastname:" ", age: 0}
    }
  }

}





