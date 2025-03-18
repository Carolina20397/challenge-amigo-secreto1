// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres, será una lista
let amigo= []; 


// Función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    console.log(nombreAmigo);

    // Evita el campo vacío
    if(!nombreAmigo){ 
        alert("Debes escribir un nombre");
        return;
    }
    
    // Para evitar que se repitan los nombres
    if(amigo.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    // Agrega nombres a la lista
    amigo.push(nombreAmigo);
    inputAmigo.value = ""; // Limpia el campo "Añadir"
    inputAmigo.focus();
    renderizaAmigos();
}


// Función para actualizar la lista de amigos 
function renderizaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}


// Función para sortear a los amigos 
function sortearAmigo() {
    // Valida que haya amigos en la lista
    if(amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    // Genera el aleatorio
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}


function nuevoJuego() {
    // Limpiar la lista de amigos y el resultado del sorteo
    amigo = [];
    renderizaAmigos();

    // Limpiar el resultado del sorteo
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aún no se ha sorteado."; // Reiniciar el resultado

    // Mostrar mensaje de nuevo juego iniciado después de la limpieza
    setTimeout(function() {
        alert("Nuevo juego iniciado.");
    }, 10);  // setTimeout para retraso para que el alert se muestre después de la limpieza
}
