let filmes = [];

for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome de um filme:");
    filmes.push(filme); 
}
console.log("Filmes informados:");
for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i]);
}
