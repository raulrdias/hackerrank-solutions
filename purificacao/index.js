const stringCorrompida = "*Canis %lupus )familiaris"


const caracteresEspeciais = /[@#$%&*()]/g;

const nomePurificado = stringCorrompida.replace(caracteresEspeciais, "");
console.log(nomePurificado);
