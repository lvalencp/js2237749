//Realizar una clase llamada Libro para la modelación de una biblioteca
class Libro{
    constructor(titulo, autor, editorial, fecha, paginas){
        this._titulo=titulo;
        this._autor=autor;
        this._editorial=editorial;
        this._fecha=fecha;
        this._paginas=paginas;
    }
    set titulo(titulo){
        this._titulo=titulo;
    }
    set autor(autor){
        this._autor=autor;
    }
    set editorial(editorial){
        this._editorial=editorial;
    }
    set fecha(fecha){
        this._fecha=fecha;
    }
    set paginas(paginas){
        this._paginas=paginas;
    }
    get titulo(){
        return this._titulo;
    }
    get autor(){
        return this._autor;
    }
    get editorial(){
        return this._editorial;
    }
    get fecha(){
        return this._fecha;
    }
    get paginas(){
        return this._paginas;
    }
    infoLibro(){
        return `Libro ${this._titulo} de ${this._autor} públicado con la editorial ${this._editorial} del año ${this._fecha} con ${this._paginas} páginas`
    }
    reemplazoLibro(fecha){
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
    promedioTiempo(tiempo){
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
var l1=new Libro("Cien Años de Soledad","Gabriel Garcia Marquez","Sudamericana","1967", 471);
var l2=new Libro("Satanás","Mario Mendoza","Planeta","2011", 288);
console.log(l1.infoLibro(l1));
// console.log(l2.infoLibro(l2));
console.log(l1._editorial);
// console.log(l2._autor);
console.log(l1.reemplazoLibro(l1));
console.log(l1.promedioTiempo(960));
