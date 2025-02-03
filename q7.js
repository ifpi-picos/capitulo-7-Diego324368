// Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome 
function exibirPrimeiroNome(nomeCompleto) {
    const nomes = nomeCompleto.split(' ');
    const primeiroNome = nomes[0];

    console.log('Primeiro nome: ' + primeiroNome);
}
exibirPrimeiroNome('Diego Rodrigues da Silva');
