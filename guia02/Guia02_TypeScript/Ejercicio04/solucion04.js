var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
    }
    /**
     * Sumar
     */
    Calculadora.prototype.Sumar = function () {
        return this.resultado = this.op1 + this.op2;
    };
    Calculadora.prototype.Restar = function () {
        return this.resultado = this.op1 - this.op2;
    };
    Calculadora.prototype.Multiplicar = function () {
        return this.resultado = this.op1 * this.op2;
    };
    Calculadora.prototype.Division = function () {
        if (this.op2 == 0) {
            return 0;
        }
        return this.resultado = this.op1 / this.op2;
    };
    return Calculadora;
}());
var miCalculadora = new Calculadora(15, 5);
console.log("El resultado de 15 + 5 = " + miCalculadora.Sumar());
console.log("El resultado de 15 - 5 = " + miCalculadora.Restar());
console.log("El resultado de 15 * 5 = " + miCalculadora.Multiplicar());
console.log("El resultado de 15 / 5 = " + miCalculadora.Division());
