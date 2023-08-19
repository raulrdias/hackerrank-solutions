const resultados = ['V', 'E', 'V', 'E'];

let pontuacao = 0;

for ( let placar of resultados){
    if ( placar === 'V') {
        pontuacao += 3
    } else if ( placar === 'E') {
        pontuacao++
    }
}

console.log(pontuacao)