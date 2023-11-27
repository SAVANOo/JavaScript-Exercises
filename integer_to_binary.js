IntToBin(0)
IntToBin(1)
IntToBin(1.5)
IntToBin(10)
IntToBin(500)

function IntToBin(inteiro) {
    if (!Number.isInteger(inteiro)) {
        console.log("Esse número não é inteiro")
        return false;
    }
    else {
        let aux = inteiro;
        let binario = "";

        if (aux == 0) {
            console.log('0');
            return '0';
        } else {
            while (aux > 0) {
                binario = (aux % 2) + binario
                aux = (aux / 2) | 0
            }
        }
        console.log(binario);
        return binario;
    }
}