class Empleado {
    nombre: string;
    salario: number;
    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }
    CalularSalario(): number {
        return this.salario - this.CalcularDescuentos();
    }

    private CalcularDescuentos(): number {
        return this.salario * 0.0725 + this.salario * 0.03;
    }
}

let empleado1 = new Empleado("Oscarito",1000);

console.log(`El salario de ${empleado1.nombre} es $${empleado1.salario} y con los descuentos le quedaría a ${empleado1.CalularSalario()}`);
