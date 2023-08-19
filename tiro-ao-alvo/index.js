const disparos = [0, 10, 50, 70, 80, 30, 100, 150];

let acimaDe70 = 0;

for (let verify of disparos) {
    if (verify > 70) {
        acimaDe70++
    }
}
if (acimaDe70 > 2) {
    console.log(acimaDe70)
} else {
    console.log('ELIMINADO')
}

