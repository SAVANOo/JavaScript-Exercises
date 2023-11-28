console.log(HexToDec("0")) // "0"
console.log(HexToDec("1")) // "1"
console.log(HexToDec("-50")) // null
console.log(HexToDec("a")) // "10"
console.log(HexToDec("A")) // "10"
console.log(HexToDec(102)) // "258"
console.log(HexToDec("102")) // "258"
console.log(HexToDec(`1F4`)) // "500"
console.log(HexToDec("1F4")) // "500"

function HexToDec(inteiro) {
    if (inteiro < 0) {
        return null;
    }
    else {
        let HexString = String(inteiro);
        let Decimal = Number(0)
        let Potencia = Number(0)
        let Aux = Number(0)
        for (let i = HexString.length - 1; i >= 0; i--) {
            if (isNaN(HexString[i])) {
                Aux = HexString.toUpperCase().charCodeAt(i) - 55;
            } else {
                Aux = HexString[i]
            }
            Decimal += (Aux * (Math.pow(16, Potencia)))
            Potencia++
        }
        return Decimal;
    }
}