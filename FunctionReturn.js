let toma = 10;
let tofa = 20;

function soma(sopa, topa,escolha) {
    let sopo;
    let topo;
    if (sopa % 2 == 0) {
         sopo = "Sopa Par";
    } else {
         sopo = "Sopa Impar";
    }

    if (topa % 2 == 0) {
         topo = "Topa Par";
    } else {
         topo = "Topa Impar";
    }

    if (escolha == 1) {
        return sopo + " e " + topo;
    } else {
        return (sopa + topa);
    }
}

let resultado = soma(20, 40,2);


console.log(soma(toma, tofa,1));
console.log(resultado);