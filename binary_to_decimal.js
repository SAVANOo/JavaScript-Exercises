console.log(BinToDec(0)) // "0"
console.log(BinToDec(1)) // "0"
console.log(BinToDec(1001)) // "9"
console.log(BinToDec(1010)) // "10"
console.log(BinToDec(1110)) // "14"

function BinToDec(inteiro) {
    if (inteiro < 0) {
        return null;
    }
    else {
        let BinString = String(inteiro);
        let Decimal = Number(0)
        let aux = Number(0)

        for (let i = BinString.length - 1; i >= 0; i--) {
            if (Number(BinString[i]) == 1) {
                Decimal += Math.pow(2, aux);
            }
            aux++;
        }

        return Decimal;
    }
}