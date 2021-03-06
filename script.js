/*Que empiece por letra o número, y tenga al menos un carácter Para el dominio (ej. @hotmail @gmail):
Que tenga @
Que tenga solo letras, y al menos tres caracteres Para el dominio padre (ej. .es .com .org)
Podrá tener dos (.es, .fr, .it,…) o tres letras (.com, .net, .org,..) o cuatro (.mobi, info,…)
Debe ir al final, detrás de un punto
*La expresión regular sería algo como: expresionregular@expresionregular.expresionregular. Ej: elena@gmail.com; pepe03@hotmail.es Crearemos un formulario que llamará a la función checkEmail. Esta función será la que ejecute la expresión regular. Se le pasará como argumento el valor del email recogido.
Patrón RegExp: expresionregular@expresionregular.expresionregular*/
//PARA OBTENER LOS DATOS DEL FORMULARIO

document.getElementById("formulario").addEventListener('submit',function(event){
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let password = document.getElementById('password').value;
    let raceOrNot = document.getElementById('raza').value;
    console.log(`Correo: ${checkMail(mail)}`);
    console.log(`Password: ${checkPassword(password)}`);
    console.log(`Raza: ${checkRace(raceOrNot)}`);

    
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

function checkRace(raceOrNot){
    let regex = /^elfo$|^humano$|^hobbit$|^enano$/;
    return regex.test(raceOrNot);
}

//VALIDACIÓN EMAIL
function checkMail(email){
    let regex_1 = /^[A-Za-z0-9._-]+@([A-Za-z0-9._-])+\.[A-Za-z]{2,4}$/;
    return regex_1.test(email);
}


