//ALCANCIA
function alcancia(){
    let ahorro=0;
    function guardar(monedas){
        ahorro=ahorro+monedas;
        // console.log ("Tiene $"+ahorro);
        console.log (`Tiene $ ${ahorro} pesos`);
    }
    return guardar;
}
const pedro=alcancia();
const maria=alcancia();
pedro(100);
maria(1);
pedro(200);
maria(5);

//CONTADOR
function contador(inicio){
    let i=inicio;
    function increment(){
        inicio++;
        console.log(inicio);
    }
    return increment;
}

const x=contador(10);
x();

//CONTADOR FLECHA
const contador1=(inicio)=>{

    let i=inicio;
    return ()=>{
        inicio ++;
        console.log(inicio);
    }
}
const y=contador1(10);
y();


//Objeto
const person=()=>{
    var saveName="Name";
    return{
        getName:()=>{
            return saveName;
        },
        setName:(name)=>{
            saveName=name;
        },
    };
};
newPerson=person();
console.log(newPerson.getName());
newPerson.setName("Sam");
console.log(newPerson.getName());