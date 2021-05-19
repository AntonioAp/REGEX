
//PARA OBTENER LOS DATOS DEL FORMULARIO

document.getElementById("formulario").addEventListener('submit',function(event){
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let password = document.getElementById('password').value;
    let raza = document.getElementById('raza').value;
    console.log(mail)
    console.log(raza)
    console.log(password)
    console.log(checkRace(raza));

})

function checkRace(raceOrNot){
    /* let regex_1 = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]{1, }+\.[A-Za-z]{2,4}$/; */
    let regex_1 = /[^A-Za-z0-9]/;
    let regex_2 = /elfo|humano|hobbit|enano/;
    console.log(regex_1.test(raceOrNot), regex_2.test(raceOrNot))
    return regex_1.test(raceOrNot) &&  regex_2.test(raceOrNot);
}
