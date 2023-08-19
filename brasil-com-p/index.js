const primeiraLetra = 'a'
const segundaLetra = 'v'
const palavras = ['aveia', 'manha', 'ave']
let lista = []

for (let palav of palavras) {
    if (primeiraLetra === palav[0] && segundaLetra === palav[1]) {
        lista.push(palav)
        console.log(palav)
    }
}
if (lista.length === 0) {
    console.log('NENHUMA')
}