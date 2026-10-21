let notas = [8,7,9,4,6,10,12];
let verificar = notas.every( nota => nota  > 0 && nota <=10);

if (verificar) {
    console.log("notas Válidas.")
}
else{
    console.log("Notas Inválidas!")
}

// EVERY: Verifica se todos os elementos do array atendem a uma condição específica. Retorna true se todos os elementos atenderem à condição, caso contrário, retorna false.