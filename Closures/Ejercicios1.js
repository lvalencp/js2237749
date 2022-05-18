//Ejercicio1 (Contador)
//Intento 1
function crearContador(num){
    let almacenar=0;
    function incrementar(){
        almacenar=num+1
        //num = num+1;
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
            console.log(` ${cont} clave: ${prop} = ${cont} valor: ${obj[prop]}`);
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

function pitagoras(c1, c2, h1){
    function hallar(){
        if (c1==0){
            console.log(`        Formula a implementar: c2 = c2: ${c2} - h2: ${h1}`)
            multic=c2*c2;
            multih=h1*h1;
            rest=multic-multih;
            c1=Math.sqrt(rest);
        } else if(c2==0){
            console.log(`        Formula a implementar: c2 = c2:(${c1}) - h2:(${h1})`)
            multic=c1*c1;
            multih=h1*h1;
            rest=multic-multih;
            c2=Math.sqrt(rest);
        } else {
            console.log(`        Formula a implementar: h2 = c2:(${c1}) - c2:(${c2})`)
            multi1=c1*c1;
            multi2=c2*c2;
            sumcat=multi1+multi2;
            h1=Math.sqrt(sumcat);
        }
        console.log(`        El valor del primer cateto es ${c1}
        El valor del segundo cateto es ${c2}
        El valor de la Hipotenusa es ${h1}`)
     }
    return hallar;
}
const h=pitagoras(25, 5, 0);
h();

//2. El usuario debe ingresar el valor del billete y el valor del producto a comprar, si el producto vale más de $2.000 se realizará el descuento del 10%
//si el producto vale más de $5.000 el descuento será del 20% y si el producto vale más de $10.000 el descuento será del 30%
function dinero(bill){
    function cambio(pro, des){
        if(pro>=2000 && pro<5000){
            des=pro*0.10;
            prod1=pro-des;
            cambio=bill-prod1;
        } else if(pro>=5000 && pro<10000){
            des=pro*0.20;
            prod1=pro-des;
            cambio=bill-prod1;
        } else if(pro>=10000){
            des=pro*0.30;
            prod1=pro-des;
            cambio=bill-prod1;
        }
        console.log(`            Valor del Producto: $ ${pro}
            El Descuento es de: $ ${des}
            Valor del Producto con el Descuento: $ ${prod1}
            Valor del Billete: $ ${bill}
            Vueltas: $ ${cambio}`)
    }
    return cambio;
}
const g=dinero(20000);
g(15000);


//Ejercicios David 1. Cree un algoritmo , que solicite los tres lados de un triángulo Escribir un algoritmo, que solicite los tres lados de un triángulo, como salida deberá mostrar si es isóceles, escaleno o equilátero y el porque es ese tipo de triangulo
function triangulos(){
    function reconocer(l1, l2, l3){
        if (l1!=l2 && l2!=l3){
            console.log (`        El triangulo es Escaleno
        Todos sus lados son diferentes`)
        } else if(l1==l2 && l2==l3){
            console.log (`        El triangulo es Equilatero
        Todos sus lados son iguales`)
        } else {
            console.log (`        El triangulo es Isósceles
        Tiene dos lados iguales y uno no`)
        }
        console.log (`        Lado 1: ${l1}
        Lado 2: ${l2}
        Lado 3: ${l3}`);
    }
    return reconocer;
}
const tt=triangulos();
tt(5, 2, 1);

//Ejercicio 2.
function jugadores(juan, carlos){
    let x=0;
    let y=0;
    let letrasj="zwrt"//abcd
    let letrasc="efgh"
    function placas(){
        for (let j =0; j < letrasj.length; j++){
            for (let lej = 0; lej < juan.length; lej++){
                if (letrasj[j]==juan[lej]){
                    x=x+1;
                }
            }
        }
        console.log(`Juan tiene ${x} puntos`);

        for (let c =0; c < letrasc.length; c++){
            for (let lec = 0; lec < carlos.length; lec++){
                if (letrasc[c]==carlos[lec]){
                    y=y+1;
                }
            }
        }
        console.log(`Carlos tiene ${y} puntos`);

        if(x>y){
            console.log(`Juan lleva la delantera`)
        } else if (y>x){
            console.log(`Carlos lleva la delantera`)
        } else {
            console.log(`Están empatados`)
        }
    }
    return placas;
}
const i=jugadores("abcz","efgh");
i();