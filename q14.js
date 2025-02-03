
let filmes = [
    { titulo: "O Poderoso Chefão", ano: 1972 },
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", ano: 2001 },
    { titulo: "Pulp Fiction", ano: 1994 },
    { titulo: "Forrest Gump", ano: 1994 },
    { titulo: "Matrix", ano: 1999 }
  ];
  
 
  filmes.sort((a, b) => {
    if (a.titulo < b.titulo) {
      return -1;
    }
    if (a.titulo > b.titulo) {
      return 1;
    }
    return 0;
  });
  
 
  console.log(filmes);
  