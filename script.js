
//PARA OBTENER LOS DATOS DEL FORMULARIO

document.getElementById("formulario").addEventListener('submit',function(event){
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let password = document.getElementById('password').value;
    let raza = document.getElementById('raza').value;
    console.log(mail)
    console.log(raza)
    console.log(password)
    console.log(checkMail(mail));

})

/*Que empiece por una letra o número
Que tenga entre 6 y 20 caracteres
Que se pueda poner alguno de estos símbolos, o varios: !,@,#,$,%,&
Que haga una búsqueda global en toda la cadena Para la implementación de validar la contraseña, vamos a crear la función checkPassword. Esta función será la que ejecute la expresión regular. Se le pasará como argumento el valor de la contraseña recogida*/
//VALIDACIÓN PASSWORD

function checkPassword(password){
    let regex_2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$/;
  return regex_2.test(password)
}


