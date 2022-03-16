// objetos

// var perro = {
//     nombre:"rex",
//     edad: 5,
//     vivo: true
// }


// var perro2 = {
//     nombre:"tommy",
//     edad: 3,
//     vivo: false
// }


function Perro(nombre, edad, vivo){
    this.nombre = nombre
    this.edad = edad;
    this.vivo = vivo;
}

var perro1 = new Perro ("Rex", 5, true)
console.log(perro1)

var perro2 = new Perro ("Tomy", 3, false)
console.log(perro2)

var animal = [perro1, perro2]
console.log(animal)

// array con objetos adentro

var gatos = [
    {
        nombre: "felix",
        edad: 5
    },
    {
        nombre: "tomy",
        edad: 3
    }
];

