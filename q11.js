
let filmes = [];


for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome de um filme:");
    filmes.push(filme); 
}


filmes.forEach(filme => {
    console.log(`Filme: ${filme}`);
    console.log(`Crítica engraçada: Esse filme é tão épico que até o presidente ficou emocionado! 🍿🎬\n`);
});
