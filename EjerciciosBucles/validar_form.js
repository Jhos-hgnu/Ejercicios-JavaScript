/**Imagina que tienes un formulario de registro de usuario que necesita validar la entrada de datos antes de enviarlo. 
 * Debes verificar si el nombre de usuario y la contraseña han sido proporcionados correctamente. 
 * Si alguno de estos campos está vacío, debes mostrar un mensaje de error. */

function validateUser(usuario, contraseña){
    if(!usuario || !contraseña){
        console.log("Usuario o contraseña vacios ")
    }else{
        console.log("Bienvenido " + usuario)
    }
}    

validateUser("","123")
validateUser("Josue", "123")