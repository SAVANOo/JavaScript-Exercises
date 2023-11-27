console.log(DecToHex(0)) // "0"
console.log(DecToHex(1)) // "1"
console.log(DecToHex(1.5)) // null ; O número não é inteiro 
console.log(DecToHex(-10)) // null ; O número é negativo 
console.log(DecToHex(10)) // "10"
console.log(DecToHex(500)) // "1F4"
console.log(DecToHex(12000)) // "2EE0"

function DecToHex(inteiro) {
    if (!Number.isInteger(inteiro) || inteiro < 0) {
        return null;
    }
    else {
        let aux = inteiro;
        let hexadecimal = "";

        if (aux <= 15) {
            return String(aux);
        } else {
            while (aux > 0) {
                let hexDigit = (aux % 16);

                if (hexDigit >= 10 && hexDigit <= 15) {
                    hexDigit = String.fromCharCode(hexDigit + 55);
                }
                hexadecimal = hexDigit + hexadecimal
                aux = (aux / 16) | 0
            }
        }
        return hexadecimal;
    }
}