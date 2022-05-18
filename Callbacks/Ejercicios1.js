//Función principal que reciba un arreglo con el tamaño y números aleatorios
function principal(vec, callback1, callback2){
    let tam=Math.round((Math.random()*20));
    let vecc=Math.round((Math.random()*100));
    for (let i = 0;  i < tam; i++){
        vec.push(vecc);
    }
    callback1(vec);
    console.log(callback2(vec));
}

function imprimeVec(vec){
    console.log(vec);
}

function sumaVec(vec){
    suma=0;
    for (let i = 0; i < vec.length; i++){
        suma+=vec[i];
    }
    return suma;
}

vector=[];
principal(vector, imprimeVec, sumaVec);

//Misión: Finalizar este ejercicio para
//todas las combinaciones posibles
function orden(n1, n2, n3, callback) {
    console.log(`en funcion principal ${n1} ${n2} ${n3}`);
    callback(n1, n2, n3);
}

const call = (n1, n2, n3) => {
    //5 2 8
    if (n1 < n2 && n2 < n3) {
    console.log(`en callback ${n1} ${n2} ${n3}`);
    }else if (n1 < n3 && n3 < n2) {
        console.log(`en callback  ${n1} ${n3} ${n2}`);
    }else if (n2 < n1 && n1 < n3) {
    console.log(`en callback  ${n2} ${n1} ${n3}`);
    }else if (n2 < n3 && n3 < n1) {
        console.log(`en callback  ${n2} ${n3} ${n1}`);
    }else if (n3 < n2 && n2 < n1) {
    console.log(`en callback  ${n3} ${n2} ${n1}`);
    } else if (n3 < n1 && n1 < n2) {
        console.log(`en callback  ${n3} ${n1} ${n2} `);
    }
};

orden(5,2,8,call);


//EJERCICIO CALLBACK ANIDADO
//Misión: Intentar finalizar este programa
function principal(vec1, callback1,callback2) {
    let tam = Math.round(Math.random() * 20);
    for (let i = 0; i < tam; i++) {
      vec1.push(Math.round(Math.random() * 100));
    }
    callback1(vec1,callback2);
    //console.log(callback2(vec1));
  }
  function imprimeVec(vec, callback) {
    console.log(vec);
    callback(vec);
  }
  function sumaVector(vec) {  
    let suma=0;
    for (let i = 0; i < vec.length; i++) {
        suma+=vec[i];
    }
    return suma;
  }
  
  vector = [];
  principal(vector,()=>{imprimeVec(vector,()=>{
      console.log(sumaVector(vector));
    })
});