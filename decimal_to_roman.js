console.log(DecimalToRoman("a")) // null
console.log(DecimalToRoman(null)) // null
console.log(DecimalToRoman(true)) // null
console.log(DecimalToRoman("1")) // I
console.log(DecimalToRoman("5")) // V
console.log(DecimalToRoman(100)) // C
console.log(DecimalToRoman(90)) // XC
console.log(DecimalToRoman(80)) // LXXX

function DecimalToRoman(Decimal) {
    if (!((typeof Decimal == "string" && !isNaN(Decimal))
        || typeof Decimal == 'number')) {
        return null;
    }

    const RomanNumeral = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ]

    let Resultado = ""

    for (const { value, numeral } of RomanNumeral) {
        while (Decimal >= value) {
            Resultado += numeral;
            Decimal -= value;
        }
    }
    return Resultado;
}