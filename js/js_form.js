const btn = document.querySelector('#btn');
btn.addEventListener('click', capturar)


function capturar() {


    function Persona(nombre, apellido, codigo, fecha, direccion, telefono, celular, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.codigo = codigo;
        this.fecha = fecha;
        this.direccion = direccion;
        this.telefono = telefono;
        this.celular = celular;
        this.email = email;
    }


    // DECLARACION VARIABLES
    nombreCap = document.getElementById('nombre').value;
    apellidoCap = document.getElementById('apellido').value;
    codigoCap = document.getElementById('codigo').value;
    fechaCap = document.getElementById('fecha').value;
    direccionCap = document.getElementById('direccion').value;
    telefonoCap = document.getElementById('telefono').value;
    celularCap = document.getElementById('celular').value;
    emailCap = document.getElementById('email').value;



    // VARIABLES DE EXPRESION REGULARES
    ExpRegNomApe = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ]+/;
    ExpRegCodigo = /^[0-9]{8}$/;
    ExpRegFecha = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    ExpRegDireccion = /[\wñáéíóúÁÉÍÓÚ,#-/_+.|°]/;
    ExpRegNumTelefono = /^[0-9]{7}$/;
    ExpRegNumCelular = /^[3][0-9]{9}$/;
    ExpRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;



    //VALIDAR FORMULARIO MEDIAN LA ENTRA DE DATOS

    //NOMBRE
    if (!ExpRegNomApe.test(nombreCap)) {
        alertify.error("El campo Nombre es invalido")
        return false;
    }
    //APELLIDO
    if (!ExpRegNomApe.test(apellidoCap)) {
        alertify.error("El campo Apellido es invalido")
        return false;
    }
    //CODIGO ESTUDIANTE
    if (!ExpRegCodigo.test(codigoCap)) {
        alertify.error("El campo Codigo Estudiante es invalido")
        return false;
    }
    //FECHA
    if (!ExpRegFecha.test(fechaCap)) {
        alertify.error("El campo Fecha es invalido")
        return false;
    }
    //DIRECCION
    if (!ExpRegDireccion.test(direccionCap)) {
        alertify.error("El campo Direccion es invalido")
        return false;
    }
    //TELEFONO FIJO
    if (!ExpRegNumTelefono.test(telefonoCap)) {
        alertify.error("El campo Telefono Fijo es invalido")
        return false;
    }
    //TELEFONO CELULAR
    if (!ExpRegNumCelular.test(celularCap)) {
        alertify.error("El campo Telefono Celular es invalido")
        return false;
    }
    //CORREO ELECTRONICO
    if (!ExpRegEmail.test(emailCap)) {
        alertify.error("El campo Correo Electronico es invalido")
        return false;
    } else {

        alertify.success("El registro fue exitoso!!");
    }

    nuevoSujeto = new Persona(nombreCap, apellidoCap, codigoCap, fechaCap, direccionCap, telefonoCap, celularCap, emailCap);
    console.log(nuevoSujeto);
    agregar();
}

var baseDatos = [];

function agregar() {
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    formulario.reset();
    document.getElementById("tabla").innerHTML += '<tbody><td>' + nuevoSujeto.nombre + '</td><td>' + nuevoSujeto.apellido + '</td><td>' + nuevoSujeto.codigo +
        '</td> <td>' + nuevoSujeto.fecha + '</td> <td>' + nuevoSujeto.direccion + '</td> <td>' + nuevoSujeto.telefono + '</td> <td>' + nuevoSujeto.celular +
        '</td> <td>' + nuevoSujeto.email + '</td></tbody>';

};