// Escreva um programa que solicita ao usuário o nome de 5 filmes e os armazena em um array. Em seguida, exiba no console os filmes informados.
let filmes = []
for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome de um filme:");
    filmes.push(filme); 
}
console.log("Filmes informados:");
filmes.forEach(filme => {
    console.log(filme);
});
