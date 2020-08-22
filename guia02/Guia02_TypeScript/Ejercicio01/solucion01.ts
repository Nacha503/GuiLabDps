class Rombo {
    DiagonalVertical:number;
    DiagonalHorizontal:number;
    
    constructor(diagonalVertical:number, diagonalHorizontal:number) {
        this.DiagonalHorizontal=diagonalHorizontal;
        this.DiagonalVertical=diagonalVertical;
    }
    
    CalcularArea():number{
        
        return this.DiagonalHorizontal*this.DiagonalVertical;
    }
    
}

let miRombo = new Rombo(15,47);



console.log(`El area de mi rombo con dimensiones Diagonal Vertical ${miRombo.DiagonalVertical}cm y Diagonal Horizontal ${miRombo.DiagonalHorizontal}cm es de ${miRombo.CalcularArea()}cm2`);