/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
Aquí deberás desarrollar la lógica para resolver el problema.*/

//Titulo Nuevo

document.querySelector('h1').textContent = 'Sorteo del Amigo Secreto';


//Lista y Variables
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const btnReiniciar = document.getElementById("reiniciar"); //Botón de Reinicio 
const btnSortear = document.getElementById("sortear"); // Botón de sorteo




//Función para agregar un amigo a la lista
function agregarAmigo() {
    if (!inputAmigo.value) {
        alert('⚠️ Debes ingresar un nombre válido');
        return;
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    limpiarCaja();

    actualizarEstadoBotones(); // Verificar si se habilita el botón de sorteo

};

//Función para limpiar el Input
function limpiarCaja() {
    inputAmigo.value = "";
};


//Función para sortear amigo Secreto 
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }
    const sorteados = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[sorteados];
    ulResultado.innerHTML = `<li>🎉 El amigo secreto es ${amigoSecreto} 🎉</li>`

    // Habilitar el botón de nuevo sorteo después de sortear
    btnReiniciar.removeAttribute('disabled');

};

function reiniciarSorteo() {
    limpiarCaja();
    ulResultado.innerHTML = ""; // Limpiar el resultado del sorteo
    ulListaAmigos.innerHTML = ""; // Limpiar la lista de amigos
    listaAmigos.length = 0; // Vaciar la lista de amigos
   
    actualizarEstadoBotones(); // Deshabilitar botones si es necesario
};

// Función para actualizar el estado de los botones
function actualizarEstadoBotones() {
    if (listaAmigos.length > 1) {
        btnSortear.removeAttribute('disabled'); // Habilita el botón de sorteo
        
    } else {
        btnSortear.setAttribute('disabled', 'true'); // Deshabilita el botón de sorteo
       
    }
    // El botón de reinicio solo se activa después de sortear
    btnReiniciar.setAttribute('disabled', 'true');
}

// Deshabilitar los botones al inicio
actualizarEstadoBotones();











