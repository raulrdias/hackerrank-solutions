const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

let maior = 0;
let menor = 0;
let calc = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notas[maior]) {
        maior = i
    } else if (notas[i] < notas[menor]) {
        menor = i
    }
}
// Calcular o índice a ser removido primeiro
let primeiroIndiceRemover = Math.min(menor, maior);
let segundoIndiceRemover = Math.max(menor, maior);

// Remover os elementos ao mesmo tempo
notas.splice(segundoIndiceRemover, 1);
notas.splice(primeiroIndiceRemover, 1);

for (let calculo of notas) {
    calc += calculo
}

console.log(calc / notas.length);
