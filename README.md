Amigo Secreto

Este es un pequeño proyecto en JavaScript, HTML y CSS que permite a los usuarios ingresar nombres en una lista y realizar un sorteo aleatorio para seleccionar un "amigo secreto".

📌 Características

Permite agregar nombres a una lista.

Evita nombres duplicados.

Muestra la lista de amigos agregados.

Realiza un sorteo aleatorio para seleccionar un amigo secreto.

🛠️ Tecnologías utilizadas

HTML: Estructura del documento.

CSS: Estilos para mejorar la apariencia.

JavaScript: Lógica del programa.

🚀 Cómo usarlo

Agregar amigos:

Escribe un nombre en el campo de entrada.

Presiona el botón "Añadir" para agregarlo a la lista.

Se validará que el nombre no esté vacío y que no se repita.

Visualizar la lista de amigos:

Los nombres agregados aparecen en una lista debajo del campo de entrada.

Realizar el sorteo:

Presiona el botón "Sortear amigo".

Se seleccionará un nombre aleatorio de la lista y se mostrará en pantalla.

📜 Explicación del Código

Variables principales

let amigos = []; // Lista de amigos agregados

Función agregarAmigo()

Esta función se encarga de:

Obtener el valor del campo de entrada.

Validar que el nombre no esté vacío ni duplicado.

Agregar el nombre al array amigos.

Limpiar el campo de entrada.

Llamar a actualizarLista() para actualizar la visualización.

Función actualizarLista()

Recorre el array amigos y actualiza la lista en el HTML.

function actualizarLista() { let lista = document.getElementById("listaAmigos"); lista.innerHTML = ""; // Limpia la lista antes de actualizarla

for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
}
}

Función sortearAmigo()

Realiza el sorteo aleatorio y muestra el resultado en la UI.

function sortearAmigo() { if (amigos.length === 0) { alert("No hay amigos en la lista para sortear."); return; }

let indice = Math.floor(Math.random() * amigos.length);
let amigoSorteado = amigos[indice];

let resultadoElemento = document.getElementById("resultado");
resultadoElemento.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

📌 Mejoras futuras

Implementar una función para eliminar amigos de la lista.

Permitir guardar los nombres en localStorage para que no se pierdan al recargar la página.

Crear una interfaz más amigable con animaciones.

¡Diviértete sorteando tu Amigo Secreto! 🎁🎉
