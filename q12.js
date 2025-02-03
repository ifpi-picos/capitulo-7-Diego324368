// Criando um array vazio para armazenar os filmes
let filmes = [];

// Solicitando ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome de um filme:");
    filmes.push(filme); // Adicionando o filme ao array
}

// Crítica engraçada para cada filme usando for...of
for (let filme of filmes) {
    console.log(`Filme: ${filme}`);
    console.log(`Crítica engraçada: Esse filme é tão incrível que até o roteiro ficou com inveja da atuação! 😂🎬\n`);
}
