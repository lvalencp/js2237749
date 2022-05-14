console.log ('Voy a ser senior en js');

function saludar(nombre){
    //console.log("Hola");
    return `Hola ${nombre}
    `;//este salto se imprime gracias a las comillas francesas
}

var x=saludar('Maria');
var y=saludar('Jose');
var z=saludar('Juan');
var w=saludar('Ana');
var a=saludar('Pedro');
console.log(x+y+z+w+a);

//Ejercicio Función Flecha


let x = nombre =>  `Hola ${nombre}
`;
console.log(x('Maria'));


var x = ['Maria', 'Jose', 'Juan', 'Ana', 'Pedro'];

x.forEach(function(saludar){
  return `Hola ${nombre}
    `;
})
console.log(saludar);
