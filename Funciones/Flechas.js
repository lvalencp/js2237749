//NO HAY PARAMETROS
var zzz = function () {
    return "saludo sin parametros";
  };
  
  var sinpar = () =>"Hola";
  
  
  console.log(sinpar());
  
  //UN SOLO PARAMETRO
  var cuadrado=function(num){
      return num*num;
  }
  
  var cuadradito=num=>num*num;
  console.log(cuadradito(10));
  
  //MAS DE UN PARAMETRO
  
  var factor=(n,m)=>{
      if (n%m==0||m%n==0) {
          return "uno es factor del otro"
      } else {
          return "no son factor"
      }
  }
  console.log(factor(7,10));
  
  var f=(n,m)=>n>m?`${n} es mayor`:`${m} es mayor`;
  console.log(f(20,3))
  
  //Bonus
  
  if (x>y) {
      console.log(`${x} es mayor`);
  } else {
      console.log(`${y} es mayor`);
  }
  var x=100,y=50;
  x>y?console.log(`${x} es mayor`):console.log(`${y} es mayor`)