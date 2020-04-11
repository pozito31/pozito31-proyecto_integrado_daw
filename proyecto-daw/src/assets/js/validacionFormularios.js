//validar datos del formulario de login
function validar(){
    usuario = document.getElementById("usuario").value;
    password = document.getElementById("password").value;

    if (usuario == 0){
        alert("El usuario no puede estar vacío");
        document.getElementById("usuario").focus();
        return false;
    }
    if(password == 0){
        alert("La contraseña no puede estar vacia");
        document.getElementById("password").focus();
        return false;
    }
    //El formulario se envia
    alert("Muchas gracias por ingresar todos los datos al formulario");
    document.miFormulario.submit();
}
//Validar datos del formulario de noticias
function validarNoticias(){
    titulo = document.getElementById("titulo").value;
    descripcion = document.getElementById("descripcion").value;
    texto = document.getElementById("texto").value;
    imagen = document.getElementById("imagen").value;

    if (titulo == 0){
        alert("El titulo de la noticia no puede estar vacia");
        document.getElementById("titulo").focus();
        return false;
    }
    if (descripcion == 0){
        alert("La descripcion de la noticia no puede estar vacia");
        document.getElementById("descripcion").focus();
        return false;
    }
    if (texto == 0){
        alert("El texto de la noticia no puede estar vacio");
        document.getElementById("texto").focus();
        return false;
    }
    if (imagen == 0){
        alert("La imagen de la noticia no puede estar sin subir");
        document.getElementById("imagen").focus();
        return false;
    }
    //El formulario se envia
    alert("Muchas gracias por insertar todos los datos al formulario");
    document.miFormulario.submit();
}
//validar datos del formulario de nuevo hermano
function validarHermano(){
    nombre = document.getElementById("nombre").value;
    primerapellido = document.getElementById("primerapellido").value;
    segundoapellido = document.getElementById("segundoapellido").value;
    dni = document.getElementById("dni").value;
    correoelectronico = document.getElementById("correoelectronico").value;
    nacimiento = document.getElementById("nacimiento").value;
    provincianacimiento = document.getElementById("provincianacimiento").value;

    if (nombre == 0){
        alert("El campo nombre no puede estar vacio");
        document.getElementById("nombre").focus();
        return false;
    }
    if (primerapellido == 0){
        alert("El campo del primer apellido no puede estar vacio");
        document.getElementById("primerapellido").focus();
        return false;
    }
    if (segundoapellido == 0){
        alert("El campo del segundo apellido no puede estar vacio");
        document.getElementById("segundoapellido").focus();
        return false;
    }
    if (dniValido(dni) == false) {
        alert("Hay un problema con el DNI");
        document.getElementById("dni").focus();
        return false;
    }
    if (emailValido(correoelectronico) == false){
        alert("El campo del correo electronico no puede estar vacio");
        document.getElementById("correoelectronico").focus();
        return false;
    }
    if (validarFecha(nacimiento) == false) {
        alert("Hay un problema con la fecha de nacimiento");
        document.getElementById("nacimiento").focus();
        return false;
    }
    if (provincianacimiento == 0){
        alert("La provincia de nacimiento no puede estar vacia");
        document.getElementById("provincianacimiento").focus();
        return false;
    }
}
function dniValido(dni){
    return /(^[0-9]{8})([-]?)([A-Z]{1})$/gm.test(dni);
}
function emailValido(correoelectronico){
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(correoelectronico);
}
function validarFecha(fecha){
    return /(^0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-](\d{4}$)/g.test(fecha);
}
//validar formulario de contacto
function validarContacto(){
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;

    if (nombre == 0){
        alert("El campo nombre no puede estar vacio");
        document.getElementById("nombre").focus();
        return false;
    }
    if (emailValido(email) == false){
        alert("El campo email no puede estar vacio");
        document.getElementById("email").focus();
        return false;
    }
    if (mensaje == 0){
        alert("El campo de mensaje no puede estar vacio");
        document.getElementById("mensaje").focus();
        return false;
    }
     //El formulario se envia
     alert("Muchas gracias por subir todos los datos del contacto al formulario");
     document.miFormulario.submit();
}
function emailValido(email) { //funcion para el email
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(email);
}