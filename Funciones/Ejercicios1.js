//EJERCICIOS 1
// PORCENTAJE
var p= (cantidad, porcentaje)=>(cantidad*porcentaje)/100;
console.log(p(260000,50))



//DIVISORES
var n = num=>{
    for (let i = 1; i < num; i++) {
        if (num%i==0) {
            console.log(`${i} Divisor de ${num}`);
        }
    }
}
console.log(n(40));


//FECHA

var f=function(x,y){
    if (x<y) {
        return  `la fecha ${y} es posterior`;
    }else if(x.getTime()=== y.getTime()){
        return'es la misma fecha'
    }
    else{
        return `La fecha ${y} es anterior a la fecha actual`
    }
}
console.log(f(new Date(),new Date('Apr 03 2022')));