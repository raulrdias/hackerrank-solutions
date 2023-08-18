const sequencia = '>>>>>>>>>'

let contagem = 0;

for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] === '>') {
        contagem++
        if (contagem > 6) {
            contagem = 0;
        }
    } else {
        contagem--
        if (contagem < 0) {
            contagem = 6;
        }
    }
}
console.log(contagem)