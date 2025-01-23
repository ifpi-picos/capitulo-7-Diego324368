//Crie uma função que recebe um nome completo do usuário e imprime o primeiro e ultimo nome.
function exibirPrimeiroEUltimoNome(nomeCompleto) {
    const nomes = nomeCompleto.split(' ');
    const primeiroNome = nomes[0];
    const ultimoNome = nomes[nomes.length - 1];

    console.log('Primeiro nome: ' + primeiroNome);
    console.log('Último nome: ' + ultimoNome);
}
exibirPrimeiroEUltimoNome('Diego Rodrigues da Silva');
