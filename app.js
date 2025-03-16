//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Array para armazenar nomes de amigos

let amigos =[];

//Função para agregar amigos
function agregarAmigos(){
    const inputAmigo = document.getElementById('Amigo');
    const nomeAmigo = inputAmigo.ariaValueMax.trim();

    //Validação de campo vazio
    if(nome === ""){
        alert("Por favor, insira seu nome");
        return;
    }

    //Validação que o nome não está duplicado
    if(amigos.includes(nomeAmigo)){
        alert('O nome ${nomeamigo} já está na lista');
        return;
    }

    //Agregar nome no array de amigos
    amigos.push(nomeAmigo);

    //Limpar campo de entrada
    inputAmigo.ariaValu = "";

    //Atualizar a lista no HTML
    actualizarLista();

}   

//Funcao para atualizar a lista de amigos
function actualizarLista(){
    const listaAmigos = document.getElementById('ListaAmigos');

    //Limpar conteúdo atual
    listaAmigos.innerHTML = "";
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}

//Funcao para sortear amigos
function sortearAmigo(){
    //Validação de amigos disponíveis
    if(amigos.length === 0){  //Comparação se array 'amigos' está vazio
        alert("Não há amigos disponíveis para sortear. Insira ao menos um.");
        return;
   }

   //Gerar índice aleatório
   const indiceAleatorio = Math.floor(Math.random() * amigos.length); 

   //Obter nome sorteado
   const amigoSorteado = amigos[indiceAleatorio]; 

   //Mostrar resultado no HTML
   const resultado = document.getElementById('resultado');
   resultado.innerHTML = 'Amigo sorteado: <strong>${amigoSorteado}</strong>';
}