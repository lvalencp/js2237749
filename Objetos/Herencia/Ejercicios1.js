//La biblioteca necesita registrar recursos multimedios como los libros,revistas, videos.Estos libros se deben organizar por categoria, los solicitantes de los libros son solicitados por aprendices e instructores
class Recurso {
    constructor(titulo,autor,fecha){
        this._titulo=titulo;
        this._autor=autor;
        this._fecha=fecha;
    }
    set titulo(titulo){
        this._titulo=titulo;
    }
    set autor(autor){
        this._autor=autor;
    }
    set fecha(fecha){
        this._fecha=fecha;
    }
    get titulo(){
        return this._titulo;
    }
    get autor(){
        return this._autor;
    }
    get fecha(){
        return this._fecha;
    }
}

class Libro extends Recurso{
    constructor(titulo, autor, editorial, fecha, paginas){
        super(titulo,autor,fecha);
        this._editorial=editorial;
        this._paginas=paginas;
    }
    set editorial(editorial){
        this._editorial=editorial;
    }
    set paginas(paginas){
        this._paginas=paginas;
    }
    get editorial(){
        return this._editorial;
    }
    get paginas(){
        return this._paginas;
    }
    infoLibro(){
        return `Libro ${this._titulo} de ${this._autor} públicado con la editorial ${this._editorial} del año ${this._fecha} con ${this._paginas} páginas`
    }
    ReemplazoLibro(fecha){
        var fecha1=new Date()
        var fecha1=fecha1.getFullYear()
        var fecha=this._fecha
        var cont = (fecha1-fecha)
        if (cont >= 10) {
            return  `El libro ${this._titulo} debe ser reemplazado, tiene ${cont} años de publicación`;
        }else {
            return'es la misma fecha'
        }
    }
    PromedioTiempo(tiempo){
        this.tiempo=tiempo;
        var x=(((this._paginas*tiempo)/60)/60);
        var y = x.toFixed(0);
        if(y >= 24){
            var z = (y/24);
            var a = z.toFixed(0);
            return `El tiempo que le tomará leer ${this._paginas} páginas del libro ${this._titulo} es de ${a} días o de ${y} horas`;
        } else{
        return `El tiempo que le tomará leer ${this._paginas} páginas del libro ${this._titulo} es de ${y} horas`;
        }
    }
}

class Seccion{
    constructor(nombre, coleccion){
        this._nombre=nombre;
        this._coleccion=coleccion
    }
    almacenar(libro){
        this._coleccion.push(libro);
    }
    getColeccion(){
        return this,this._coleccion;
    }
}

class Revista extends Recurso{
    constructor(titulo, autor, editorial, fecha){
        super(titulo,autor,fecha);
        this._editorial=editorial;
    }
    set editorial(editorial){
        this._editorial=editorial;
    }
    get editorial(){
        return this._editorial;
    }
}

class Video extends Recurso{
    constructor(titulo, autor, productora, fecha){
        super(titulo,autor,fecha);
        this._productora=productora;
    }
    set productora(productora){
        this._productora=productora;
    }
    get productora(){
        return this._productora;
    }
}

var colection=[];

var l1=new Libro("Cien Años de Soledad","Gabriel Garcia Marquez","Sudamericana","1967", 471);
var l2=new Libro("Satanás","Mario Mendoza","Planeta","2011", 288);
console.log(l1.infoLibro(l1));
console.log(l2.infoLibro(l2));
l2.titulo="Lady Masacre";
console.log(l2.infoLibro(l2));

var l2=new Revista("Satanás","Mario Mendoza","Planeta","2011", 288);
var l2=new Revista("Satanás","Mario Mendoza","Planeta","2011", 288);
console.log(l1.infoLibro(l1));
var l2=new Video("Satanás","Mario Mendoza","Planeta","2011", 288);
console.log(l1.infoLibro(l1));
var l2=new Video("Satanás","Mario Mendoza","Planeta","2011", 288);
console.log(l1.infoLibro(l1));
// console.log(l2.infoLibro(l2));
// console.log(l1._editorial);
// console.log(l2._autor);
console.log(l1.ReemplazoLibro(l1));
console.log(l1.PromedioTiempo(960));
