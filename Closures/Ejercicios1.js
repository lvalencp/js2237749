//Ejercicio1 (Contador)
//Intento 1
function crearContador(num){
    let almacenar=0;
    function incrementar(){
        almacenar=num+1
        // num = num+1;
        return almacenar;
    }
    function decrementar(){
        almacenar=num-1
        // num = num+1;
        return almacenar;
    }
    return `El valor incrementado del número es `+incrementar()+`
    El valor decrementado del número es `+decrementar();
}

const x = crearContador(100);
console.log(x);
const y = crearContador(429);
console.log(y);
console.log(y);

//Intento 2
function alcancia(monedas){
    function guardar(){
        monedas=monedas+1;
        console.log(monedas);
    }
    return guardar;
}
const asdf=alcancia(100);
asdf();
asdf();

//Intento 3
function crearContador(num){
    function incrementar(){
        num = num+1;
        console.log(num);
    }
    function decrementar(){
        num = num-1;
        console.log(num);
    }
    return incrementar;
}
const asdfx=crearContador(100);
asdfx();
asdfx();


//EJERCICIO 2 El saludo (prefijo)+(nombre)+número(num)
function saludo(inicio, saludar="Buen día"){
    let i=inicio;
    let s=saludar;
    function contador(nombre){
        let nom=nombre;
        i++;
        console.log(`${s} ${nom} eres el número ${i}`);
    };
    return contador;
};
const z=saludo(0);
z("Laura");
z("Brayan");
z("Paula");

//flecha
const saludo=(inicio, saludar="Buen día")=>{
    const contador=(nombre)=>{
        inicio ++;
        console.log(`${saludar} ${nombre} eres el número ${inicio}`);
    }
    return contador;
}
const r=saludo(0);
r("Laura");


//EJERCICIO 3 Buscar en un arreglo un número en la función externa a la función que retorna se le pasa el número y cada vez
//que se  llame decir si está o no está (saber la posición y cuantas veces está repetido)
function busqueda(arreglo){
    let arr=arreglo;
    function buscar(numero, contar=0){
        let num=numero;
        let cont=contar
        let pos=arr.indexOf(num);
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]==num){
                cont+=1;
            }
        }
        console.log(`El numero está ${cont} veces, en la posición ${pos}`)
    }
    return buscar;
}
const ww=busqueda([1,1,1,1,1,1,1,5,8,9,6,5,7]);
ww(5);

//flecha
const busqueda=(arreglo)=>{
    const buscar=(numero, contar=0)=>{
        let pos=arreglo.indexOf(numero);
        for (var i = 0; i < arreglo.length; i++) {
            if(arreglo[i]==numero){
                contar+=1;
            }
        }
        console.log(`El numero está ${contar} veces, en la posición ${pos}`)
    }
    return buscar;
}
const b=busqueda([1,1,1,1,1,1,1,5,8,9,6,5,7]);
b(5);

//EJERCICIO 4 recibir un arreglo y retornar la suma y el promedio (dos funciones en el retorno)
function sumprom(arreglo){
    let arr=arreglo;
    function sumPro(){
        let sum =0;
        let pro =arr.length;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log (`La suma de los números del arreglo es de ${sum} y el promedio de los número del arreglo es ${sum/pro}`)
    }
    return sumPro;
}
const yy=sumprom([4,1,7,8,5,3,2,4]);
yy();

//flecha
const sumprom=(arreglo)=>{
    const sumPro=(sum=0, pro=arreglo.length)=>{
        for (let i = 0; i < arreglo.length; i++) {
            sum += arreglo[i];
        }
        console.log (`La suma de los números del arreglo es de ${sum} y el promedio de los número del arreglo es ${sum/pro}`)
    }
    return sumPro
}
const u=sumprom([4,1,7,8,5,3,2,4]);
u();

//EJERCICIO 5 Recibir un Objeto literal y decir cuantos elementos clave valor tiene
function objlit(objeto){
    let obj=objeto;
    function elementos(){
        let cont=0;
        for (const prop in obj) {
            cont ++;
            console.log(` ${cont} clave ${prop} = ${cont} valor ${obj[prop]}`);
          }
    }
    return elementos;
}

const oo=objlit({
    nombre:"Daniel",
    documento:123456,
    ficha:2237749,
    ciudad:"Soacha",
});
oo();



//Redactar dos problemas qye se puedan resolver con closures
//1.Dar la hipotenusa de un triangulo, se pretende indicar el valor de los catetos del triangulo, en el cual la función realizará la
//operación para encontrar la hipotenusa del triangulo.





//2. El usuario debe ingresar el valor del billete y el valor del producto a comprar, si el producto vale más de $2.000 se realizará el descuento del 10%
//si el producto vale más de $5.000 el descuento será del 20% y si el producto vale más de $10.000 el descuento será del 30%
function dinero(billete){
    let bill=billete;
    function cambio(producto,descuento=0, cambio=0, prod1=0){
        let pro=producto;
        let des=descuento;
        if(pro>=2000){
            des=pro*0.10;
            prod1=pro-des;
            cambio=bill-prod1;
            console.log(`El producto con valor de ${pro} tiene un descuento de ${des}
            por lo cual el valor final del producto es de ${prod1} y las vueltas son: ${cambio}`)
        } else if(pro>=5000){
            des=pro*0.20;
            prod1=pro-des;
            cambio=bill-prod1;
            console.log(`El producto con valor de ${pro} tiene un descuento de ${des}
            por lo cual el valor final del producto es de ${prod1} y las vueltas son: ${cambio}`)
        } else if(pro>=10000){
            des=pro*0.30;
            prod1=pro-des;
            cambio=bill-prod1;
            console.log(`El producto con valor de ${pro} tiene un descuento de ${des}
            por lo cual el valor final del producto es de ${prod1} y las vueltas son: ${cambio}`)
        }
    }
    return cambio;
}
const g=dinero(10000);
g(2000);
