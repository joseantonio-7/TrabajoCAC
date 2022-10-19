function validar_formulario(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;

    if(nombre.length<3){
        alert("el nombre es muy corto");
        return false;
    }

    if(apellido.length<3){
        alert("el apellido es muy corto");
        return false;
    }

    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    if(!expresion.test(email)){
        alert("el email no es valido");
        return false;
    }

    return;

}

