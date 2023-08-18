const letra = "m"

const palavras = ['melancia', 'melao', 'maca', 'mamao', 'laranja']
let contador = 0;
let verifica = ""

for (let i = 0; i < palavras.length; i++) {
    verifica = palavras[i]
    if ( verifica[0] !== letra) {
        contador++
    }

}
console.log(contador)