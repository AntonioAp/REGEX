
//PARA OBTENER LOS DATOS DEL FORMULARIO

document.getElementById("formulario").addEventListener('submit',function(event){
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let password = document.getElementById('password').value;
    let raza = document.getElementById('raza').value;
    console.log(checkRace(raza));
})

function checkRace(raceOrNot){
    let regex = /^elfo$|^humano$|^hobbit$|^enano$/;
    return regex.test(raceOrNot);
}
