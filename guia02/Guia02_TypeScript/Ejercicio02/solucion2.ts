let spiderman = {
    nombre: "Peter Parker",
    poderes: ["Trepar", "Fuerza", "Agilidad", "Telas de araña"]
};

interface IHeroe{
    nombre:string;
    poderes: Array<string>;
}

function MostrarHabilidades(heroe:IHeroe) {
    
    for(let valor of heroe.poderes){
        console.log(valor);
    }
   
}


MostrarHabilidades(spiderman);
