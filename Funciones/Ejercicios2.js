//EJERCICIOS 2
//1. Leer una cadena de texto y decir cuantas minúsculas, mayúsculas, numeros o caracteres especiales tiene
let Texto = (cadena) =>{
    var contar = 0;
    var contar2 = 0;
    var contar3 = 0;
    var contar4 = 0;
    var minusculas = "abcdefghijklmnopqrstuvwxyz"
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var caracteres = "!#$%&/()=?¡¿'@[]{}"
    var numeros = "1234567890"

    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==mayusculas[i]){
                contar+=1;
            }
        }
    }
    for (var i = 0; i < numeros.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==numeros[i]){
                contar2+=1;
            }
        }
    }
    for (var i = 0; i < caracteres.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==caracteres[i]){
                contar3+=1;
            }
        }
    }
    for (var i = 0; i < minusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==minusculas[i]){
                contar4+=1;
            }
        }
    }
    return(`Dentro del texto hay:${contar} Mayusculas, ${contar4} minusculas, ${contar2} numeros y ${contar3} caracteres especiales`);
}
console.log(Texto("1561ASDG6512@@@@@@@@@{}+6fasf1"));

//2. Leer un arreglo y un numero. Decir cuantas veces esta el numero en el arreglo
var arreglo=[1,1,1,1,1,5,8,9,6,5,7];

let Numeros = (num,arreglo)=>{
    var count = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if(arreglo[i]==num){
            count+=1;
        };
    };
    return(`El número ${num} está ${count} veces dentro del arreglo ${arreglo}`);
}
console.log (Numeros(1,arreglo));


//3. Leer un vector y un numero y multiplicar cada elemento del arreglo por el numero y retornar un vector con los nuevos valores
var num = [5, 7, 5, 4, 9];

let vec = (arreglo,a) =>{
    var length = arreglo.length;
    for (var i = 0; i < length; i++) {
        arreglo[i] *= a;
    }
    return arreglo;
};
console.log(vec(num,6));


//4. Leer dos vectores. Hallar de cada uno del promedio y retornar el vector con mayor promedio
const arreglo1 = [4,5,2,1,8];
const arreglo2 = [5,7,8,1,3];

let promedio=(a,b)=>{
    let suma = 0;
    let suma2 = 0;
    const arreglo = a;
    const arreglo2 = b;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    suma=suma/arreglo.length;
    for (let i = 0; i < arreglo2.length; i++) {
        suma2 += arreglo2[i];
    };
    suma2=suma2/arreglo2.length;

    if(suma>suma2){
        return(arreglo);
    }else{
        return(arreglo2);
    };
};

console.log(promedio(arreglo1,arreglo2));


//5. Leer un arreglo numérico y retornar desviación estandar
var arreglo = [1, 2, 3, 4, 5];

let Desviacion=(arr)=>{
let mean = arr.reduce((acc, curr)=>{
    return acc + curr;
    }, 0) / arr.length;
    arr = arr.map((k)=>{
        return (k - mean) ** 2
    });
    let sum = arr.reduce((acc, curr)=> acc + curr, 0);
    return Math.sqrt(sum / arr.length);
}
console.log(Desviacion(arreglo));

