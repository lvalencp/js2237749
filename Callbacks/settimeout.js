//setTimeout(función,tiempo en milisegundos)

setTimeout(function(){
    console.log(`asincronismo`);
},3000)

setTimeout(()=>console.log("amo programar"),5000);
//******************************************** */
function proceso1(){
    console.log(`proceso 1`)
}
//setTimeout(proceso1,3000);
function proceso2(){
    console.log(`proceso 2`)
}
function proceso3(){
    console.log(`proceso 3`)
}
console.log(`iniciando proceso`);
setTimeout(proceso1,0);
proceso2();
proceso3();
console.log(`terminando proceso`);