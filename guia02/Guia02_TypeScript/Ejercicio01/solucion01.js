var Rombo = /** @class */ (function () {
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.DiagonalHorizontal = diagonalHorizontal;
        this.DiagonalVertical = diagonalVertical;
    }
    Rombo.prototype.CalcularArea = function () {
        return this.DiagonalHorizontal * this.DiagonalVertical;
    };
    return Rombo;
}());
var miRombo = new Rombo(15, 47);
console.log("El area de mi rombo con dimensiones Diagonal Vertical " + miRombo.DiagonalVertical + "cm y Diagonal Horizontal " + miRombo.DiagonalHorizontal + "cm es de " + miRombo.CalcularArea() + "cm2");
