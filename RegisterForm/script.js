let firstName;
let lastName;

function getValueInput(){
    firstName = document.getElementById("domNombreText").value;
    lastName = document.getElementById("domApellidoText").value;
        if(firstName=="ricardo"){
            alert(`Bienvenido ${firstName +` `+ lastName}`);
        }else{
            alert("Usted no esta registrado");
        }
    
}