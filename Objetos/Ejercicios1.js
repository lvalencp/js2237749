//1. Ejercicio número 1 
function Aritmetica (num1, num2){
    this.num1=num1;
    this.num2=num2;
    this.suma=function(){
        return (`La suma entre ${num1} y ${num2} es ${num1+num2}`)
    }
    this.resta=function(){
        return (`La resta entre ${num1} y ${num2} es ${num1-num2}`)
    };
    this.multi=function(){
        return (`La multiplicación entre ${num1} y ${num2} es ${num1*num2}`)
    };
    this.div=function(){
        return (`La división entre ${num1} y ${num2} es ${num1/num2}`)
    };
}
var  obj=new Aritmetica (4, 6);
console.log(obj.suma());
console.log(obj.resta());
console.log(obj.multi());
console.log(obj.div());

//2. Ejercicio número 2
function Arreglos (arr){
    this.arr=arr;
    this.suma=function(){
        var sum =0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return `La suma de los número del arreglo es ${sum}`;
    }
    this.promedio=function(){
        var sum =0;
        var pro =arr.length;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return `El promedio de los número del arreglo es ${sum/pro}`
    }
    this.mayor=function(){
        var mayor=Math.max(...arr);
        return `El número mayor de los número del arreglo es ${mayor}`
    }
    this.menor=function(){
        var menor=Math.min(...arr);
        return `El número menor de los número del arreglo es ${menor}`
    }
}

var obj=new Arreglos ([4, 1, 7, 8, 5, 3, 2, 4]);
console.log(obj.suma());
console.log(obj.promedio());
console.log(obj.mayor());
console.log(obj.menor());

//Ejercicio 3
function Fraccionario (num1, num2, num3, num4){
    this.num1=num1;
    this.num2=num2;
    this.num3=num3;
    this.num4=num4;
    this.suma=function(){
        if (num3==num4){
            var sumanum=num1+num2;
            var sumaden=num3||num4;
            return (`La suma entre ${num1} sobre ${num3} y ${num2} sobre ${num4} es: ${sumanum} sobre ${sumaden}`);
        } else {
            var multiden=num3*num4;
            var multi1=num1*num4;
            var multi2=num2*num3;
            var sumafin=multi1+multi2;
            return (`La suma entre ${num1} sobre ${num3} y ${num2} sobre ${num4} es: ${sumafin} sobre ${multiden}`);
        }
    }
    this.resta=function(){
        if (num3==num4){
            var restanum=num1-num2;
            var restaden=num3||num4;
            return (`La suma entre ${num1} sobre ${num3} y ${num2} sobre ${num4} es: ${restanum} sobre ${restaden}`);
        } else {
            var multiden=num3*num4;
            var multi1=num1*num4;
            var multi2=num2*num3;
            var restafin=multi1-multi2;
            return (`La resta entre ${num1} sobre ${num3} y ${num2} sobre ${num4} es: ${restafin} sobre ${multiden}`);
        }
    }
    this.multi=function(){
        var denominador=num3*num4;
        var numerador=num1*num2;
        return (`La multiplicación entre ${num1} sobre ${num3} y ${num2} sobre ${num4} es: ${numerador} sobre ${denominador}`);
    }
    this.div=function(){
        var multi1 =num1*num4;
        var multi2 =num2*num3;
        return (`La división entre ${num1} sobre ${num3} y ${num2} sobre ${num4} es: ${multi1} sobre ${multi2}`);
    }
}
var obj=new Fraccionario (6, 1, 4, 2);
//el orden es: num1/num3(4/2)  num2/num4(5/5)
console.log(obj.suma());
console.log(obj.resta());
console.log(obj.multi());
console.log(obj.div());

//EJERCICIO 4
//1. Leer una cadena de texto y decir cuantas minúsculas, mayúsculas, numeros o caracteres especiales tiene

function Cadena(texto){
    this.texto=texto;
    this.mayuscula=function(){
        var contar=0;
        var mayus= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i < mayus.length; i++){
        for( var x = 0; x <texto.length; x++){
            if (texto[x]==mayus[i]){
                contar+=1;
            }
        }
    }
        return ("En el texto"+texto+ " Se encontraron: "+contar+" Mayusculas");
    }

    this.minuscula=function(){
        var contar=0;
        var minus="abcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < minus.length; i++){
            for( var x = 0; x <texto.length; x++){
                if (texto[x]==minus[i]){
                    contar+=1;
                }
            }
        }
            return ("En el texto  "+texto+ " Se encontraron: "+contar+" Minusculas");
    }

    this.numeros=function(){
        var contar=0;
        var numeros="0123456789";
        for (var i = 0; i < numeros.length; i++){
            for( var x = 0; x <texto.length; x++){
                if (texto[x]==numeros[i]){
                    contar+=1;
                }
            }
        }
        return ("En el texto  "+texto+ " Se encontraron: "+contar+" Números");
    }
    this.caracteres=function(){
        var contar=0;
        var carac=".,:;{}´+!#$%&/()=?¡¿'¨*[]_@:;><";
        for (var i = 0; i < carac.length; i++){
            for( var x = 0; x <texto.length; x++){
                if (texto[x]==carac[i]){
                    contar+=1;
                }
            }
        }
        return ("En el texto  "+texto+ " Se encontraron: "+contar+" Caracteres especiales");
    }
}

var obj=new Cadena ("LauraValentina1001@gmail.com");
console.log(obj.mayuscula());
console.log(obj.minuscula());
console.log(obj.numeros());
console.log(obj.caracteres());