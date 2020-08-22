var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.CalularSalario = function () {
        return this.salario - this.CalcularDescuentos();
    };
    Empleado.prototype.CalcularDescuentos = function () {
        return this.salario * 0.0725 + this.salario * 0.03;
    };
    return Empleado;
}());
var empleado1 = new Empleado("Oscarito", 1000);
console.log("El salario de " + empleado1.nombre + " es $" + empleado1.salario + " y con los descuentos le quedar\u00EDa a " + empleado1.CalularSalario());
