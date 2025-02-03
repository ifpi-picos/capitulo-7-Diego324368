
let filmes = [];


for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome de um filme:");
    filmes.push(filme); 
}


let filmesRecomendados = filmes.filter(filme => {
   
    return filme === "Vingadores" || filme === "Matrix";
});


console.log("Filmes recomendados:");
console.log(filmesRecomendados);
