class Usuario{
    constructor(id, nombre, correo){
        this._id=id;
        this._nombre=nombre;
        this._correo=correo;
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set correo(correo){
        this._correo=correo;
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get correo(){
        return this._correo;
    }
}
class Cliente extends Usuario{
    constructor(id, nombre, correo, carrito){
        super(id, nombre, correo);
        this._carrito=carrito;
    };
    almacenar(carro){
        this._carrito.push(carro)
    };

    getCarro(){
        return this._carro;
    };
}

class Carrito {
    constructor(id){
       this._id=id;
    };
};

class Administrador extends Usuario{
    constructor(id, nombre, correo){
        super(id, nombre, correo);
    };
}

var cars=[];
var c1=new Cliente(01,"Paula", "paarevalo1@gmail.com", cars);
var a1=new Administrador(01, "Paulaaa", "paula@gmail.com");
console.log(a1);
var car1=new Carrito(01);
console.log(car1);
c1.almacenar(car1);
console.log(c1);