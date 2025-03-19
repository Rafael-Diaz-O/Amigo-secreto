// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Variables 
let amigos = []; 


function agregarAmigo(){
    
    // pido el elemento input a HTML
    let  input = document.getElementById("amigo");
    let nombre = input.value.trim();

     //.trim() borra espacios inecesarios del codigo
    // verifica si hay un nombre en blanco
     if (nombre == ""){

        alert("Por favor, ingrese un nombre valido.");
        return;
     } 
     // verifica su ya esta ese nombre en la lista
     if (amigos.includes(nombre)) {

        alert("Este nombre ya ha sido agregado.")
        return; 
     } 

    amigos.push(nombre);   // agrega el nombre a la lista 
    input.value = ""; // limpia el campo de entrada 
     actualizarLista(); // actualizar la lista de amigos

}

function actualizarLista(){

    let lista = document.getElementById("ListaAmigos");
    lista.innerHTML = ""; // limpiar la lista antes de actualizar 

        // Rellenar el array y agregar elementos <li>
    for(let  i = 0; i < amigoSecreto.lenght; i++){
        let li = document.createElement("Li");
        li.textContent = amigos[i];
        lista.appendChild(li); 
    }

}
function sortearAmigo(){

    
        if (amigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }
    
        // Generar índice aleatorio
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
    
        // Mostrar el resultado en la UI
        let resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    }


   














