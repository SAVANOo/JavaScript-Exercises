console.log(RomanToDecimal(1)) // null
console.log(RomanToDecimal("i5a")) // NaN
console.log(RomanToDecimal("i")) // 1
console.log(RomanToDecimal("iii")) // 3
console.log(RomanToDecimal("iIi")) // 3
console.log(RomanToDecimal("III")) // 3
console.log(RomanToDecimal("V")) // 5
console.log(RomanToDecimal("IV")) // 4
console.log(RomanToDecimal("VI")) // 6
console.log(RomanToDecimal("X"))// 10
console.log(RomanToDecimal("IX")) // 9
console.log(RomanToDecimal("L"))// 50
console.log(RomanToDecimal("XL")) // 40
console.log(RomanToDecimal("C"))// 100
console.log(RomanToDecimal("XC")) // 90 
console.log(RomanToDecimal("D"))// 500
console.log(RomanToDecimal("M"))// 1000


function RomanToDecimal(Roman) {
    if (typeof Roman != 'string') {
        return null;
    }

    const RomanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let Decimal = 0;
    for (let i = 0; i < Roman.length; i++) {
        const numeroAtual = RomanNumerals[Roman[i].toUpperCase()]
        const numeroNext = RomanNumerals[Roman[i + 1]]

        if (numeroAtual < numeroNext) {
            Decimal += numeroNext - numeroAtual;
            i++;
        } else {
            Decimal += numeroAtual;
        }

    }
    return Decimal;

}