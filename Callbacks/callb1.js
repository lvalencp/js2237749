function sumar (num1, num2, callback){
    let r = num1+num2;
    callback(r);
}
function impresora(msj){
    console.log(`imprimiendo ${msj}`);
}
sumar(100, 200, impresora);

//***********************************************************************/

function sumar(num1,num2, callback){
    let r=num1+num2;
    console.log(callback(r));
}
//const impresora2=(msj)=>console.log(`imprimiendo ${msj}`);
const impresora2=(msj)=>`imprimiendo ${msj}`;
sumar(9,5,impresora2);
//sumar(9,5,impresora2);




sumar(1,2,(msj)=>{
    console.log(`imprimiendo ${msj}`);
})

sumar(100,200,impresora);

function impresora(msj){
    console.log(`imprimiendo ${msj}`);
}




