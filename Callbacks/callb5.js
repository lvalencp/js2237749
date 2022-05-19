function saludo(nombre, callback) {
    setTimeout(() => {
        console.log(`Hola ${nombre} cómo estás`);
        callback();
    }, 2000);
}

function hablar() {
    setTimeout(() => {
        console.log(`Bla bla bla`);
    }, 1000);
}

// function despedida (){
//     setTimeout(() => {
//         console.log (`Chao Pues`);
//     }, 1000);
// }

saludo("Maria", hablar);


//*************************************************
//1. Realizar un programa que se asemeje a un triqui
function iniciar(jugador1, jugador2, callback){
    setTimeout(() => {
        console.log(`Bienvenid@ ${jugador1} usted es el jugador número 1 (X)`);
    }, 0);
    setTimeout(() => {
        console.log(`Bienvenid@ ${jugador2} usted es el jugador número 2 (O)`);
    }, 1000);

    callback();
}

function tablero(){
    ob={}
}



iniciar ("Maria", "Pedro", turno);

//
function letras (var1, var2, jugador1, jugador2, callback1, callback2, callback3){
    let letra=var1;
    let letra2=var2;
    let fila1=`${letra} | ${letra2} | ${letra}
        ${letra2} | ${letra} | ${letra2}
        ${letra} | ${letra2} | ${letra2}`;
    callback1();
    callback2(jugador1, jugador2, fila1);
    callback3(jugador1, jugador2);
}

function callback1(){
    setTimeout(()=>{
        console.log(`¡Que comience el juego!`);
    }, 1000);
}

function callback2(jugador1, jugador2, fila1){
    setTimeout(()=>{
        console.log (`Jugadores: ${jugador1} y ${jugador2}
        ${fila1}`);
        //console.log (fila1)
    }, 2000);
}

function callback3(jugador1, jugador2){
    setTimeout(()=>{
        console.log(`¡Se acabó!
        El ganador es ${jugador1}`);
    }, 3000)
}

letras("X", "O", "Laura", "David", callback1, callback2, callback3);