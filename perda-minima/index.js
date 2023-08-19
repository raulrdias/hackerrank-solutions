const precos = [20, 15, 8, 2, 12]; 

let compra = 0
let venda = 0
let prejuizo = 0
let menorPrejuizo = precos[0];


for (let i = 0; i < precos.length; i++) { // -> primeiro loop
    for (let j = i + 1; j < precos.length; j++) { // -> segundo loop, adicionando +1 para começar do indice seguinte
        compra = precos[i];
        venda = precos[j];
        prejuizo = compra - venda

        if (prejuizo > 0) {  // aceitando apenas numeros positivos
            if (prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo;
            }

        }
    }
}
console.log(menorPrejuizo)