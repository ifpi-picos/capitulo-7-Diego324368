
let filmes = [
    { titulo: "O Poderoso Chefão", ano: 1972 },
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", ano: 2001 },
    { titulo: "Pulp Fiction", ano: 1994 },
    { titulo: "Forrest Gump", ano: 1994 },
    { titulo: "Matrix", ano: 1999 }
  ];
  
 
  function buscarFilme(titulo) {
    
    let filmeEncontrado = filmes.find(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
  
   
    if (filmeEncontrado) {
      console.log(`Filme encontrado: ${filmeEncontrado.titulo} (${filmeEncontrado.ano})`);
    } else {
      console.log("Filme não encontrado.");
    }
  }
  
 
  buscarFilme("Matrix"); 
  buscarFilme("Titanic");
  