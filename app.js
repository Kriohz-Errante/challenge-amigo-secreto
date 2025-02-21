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
// Verificar si el nombre ya existe en la lista
if (listaAmigos.includes(inputAmigo.value)) {
    alert('⚠️ El nombre ya está en la lista.');
    return;
}
// Agregar el nombre si no existe
    listaAmigos.push(inputAmigo.value);
    mostrarListaAmigos(); // Mostrar la lista actualizada
    limpiarCaja();
    actualizarEstadoBotones(); // Verificar si se habilita el botón de sorteo

};

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    // Limpiar la lista existente antes de agregar los nuevos elementos
    ulListaAmigos.innerHTML = "";
// Iterar sobre el arreglo listaAmigos y agregar cada nombre como un <li>
for (let i = 0; i < listaAmigos.length; i++) {
    ulListaAmigos.innerHTML += `<li>${listaAmigos[i]}</li>`;
}
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











