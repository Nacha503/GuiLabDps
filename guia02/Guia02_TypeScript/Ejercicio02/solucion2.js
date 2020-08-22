var spiderman = {
    nombre: "Peter Parker",
    poderes: ["Trepar", "Fuerza", "Agilidad", "Telas de araña"]
};
function MostrarHabilidades(heroe) {
    for (var _i = 0, _a = heroe.poderes; _i < _a.length; _i++) {
        var valor = _a[_i];
        console.log(valor);
    }
}
MostrarHabilidades(spiderman);
