function Items(){
    function Objeto (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    let  item = document.getElementById("Utilidad").value;
    let  precio = document.getElementById("precio").value;
    selecion = new Objeto (item, precio);
    agregar();    
}
var baseDatos =[]
ops =[]
datos= []
function agregar(){
    baseDatos.push(selecion);
    document.getElementById("tabla").innerHTML +='<tbody><td>'+selecion.nombre+'</td><td>'+selecion.precio+'</td></tbody>';
    ops.push(selecion.nombre);
    datos.push(selecion.precio); 
}
 
