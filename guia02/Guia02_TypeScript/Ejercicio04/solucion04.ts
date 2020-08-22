class Calculadora {
    op1: number;
    op2: number;
    private resultado:number;
    constructor(op1: number, op2: number) {
        this.op1 = op1;
        this.op2 = op2;

    }

    /**
     * Sumar
     */
    public Sumar():number {
        return this.resultado = this.op1 + this.op2;
    }

    public Restar():number {
        return this.resultado = this.op1 - this.op2;
    }

    public Multiplicar():number {
        return this.resultado = this.op1 * this.op2;
    }

    public Division():number {
        if(this.op2 == 0){
            return 0;
        }
        return this.resultado = this.op1 / this.op2;

    }
}



let miCalculadora = new Calculadora(15, 5);

console.log(`El resultado de 15 + 5 = ${miCalculadora.Sumar()}`)
console.log(`El resultado de 15 - 5 = ${miCalculadora.Restar()}`)
console.log(`El resultado de 15 * 5 = ${miCalculadora.Multiplicar()}`)
console.log(`El resultado de 15 / 5 = ${miCalculadora.Division()}`)
