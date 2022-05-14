//INTRO CLAUSURAS

//Función Inicial
function crearContador(count){
    //Puede declara un parametro ej: crearContador(contador=0) y aún así las clausuras podrán acceder a el parametro como una variable
    let count = 0;
    //variable

    //Funciones que están escritas, dentro de una función más grande(función Inicial)
    return{
        //Cada una accede a una variable que están en un scope superior
        //Clausura
        incrementar: function(){
            count = count ++;
            console.log (`el valor de ${count}`);
        },
        //Clausura
        decrementar: function(){
            count = count --;
            return count;
        },
        //Clausura
        obtenerValor: function(){
            return count;
        }
    }
}

const contador1 = crearContador(100);

