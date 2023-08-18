const precos = [100, 500, 100, 200, 50];

let somaTotal = 0;
let menorPreco = precos[0]

for (let i = 0; i < precos.length; i++) {
    somaTotal += precos[i];
    if (precos.length >= 5) {
        if (menorPreco > precos[i]) {
            menorPreco = precos[i]
        }
    }
}
if (precos.length >= 5) {
    console.log(somaTotal - menorPreco)
} else {
    console.log(somaTotal)
}



