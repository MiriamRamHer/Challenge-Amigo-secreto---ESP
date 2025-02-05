// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {
    const nombre = document.getElementById('amigo').value;  
    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre)
        document.getElementById('amigo').value = ""; 
        mostrarAmigos() 
        console.log("Lista de amigos:", amigos); 
        
    }
}

function mostrarAmigos() {
    
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
                                             const li = document.createElement('li');  
                                             li.textContent = amigos[i];  
                                             lista.appendChild(li); 
                                            }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
