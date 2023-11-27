console.log(IntToBin(0)) // "0"
console.log(IntToBin(1)) // "1"
console.log(IntToBin(1.5)) // False ; O número não é inteiro 
console.log(IntToBin(-10)) // False ; O número é negativo 
console.log(IntToBin(10)) // "1010"
console.log(IntToBin(500)) // "111110100"

function IntToBin(inteiro) {
    if (!Number.isInteger(inteiro) || inteiro < 0) {
        return false;
    }
    else {
        let aux = inteiro;
        let binario = "";

        if (aux == 0) {
            return '0';
        } else {
            while (aux > 0) {
                binario = (aux % 2) + binario
                aux = (aux / 2) | 0
            }
        }
        return binario;
    }
}