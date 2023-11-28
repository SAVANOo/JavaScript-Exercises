console.log(DecryptVegenere("Hello World", 1)) // Null
console.log(DecryptVegenere(1, "Abc")) // Null
console.log(DecryptVegenere(1, 2)) // Null
console.log(DecryptVegenere("ZEGTC WJZZV", "SAVIO"))// Hello World
console.log(DecryptVegenere("EGIKIKMOMO", "EFGH"))// ABCDEFGHIJ
console.log(DecryptVegenere("BCDEFGHIJKLMNOPQRSTUVWXYZA", "B"))// ABCDEFGHIJKLMNOPQRSTUVWXYZ

function DecryptVegenere(Texto, Chave) {
    if (typeof Texto !== 'string' || typeof Chave !== 'string') {
        return null;
    }

    let TextoNumber = [];
    let ChaveNumber = [];
    let Decrypted = "";
    let ChaveIndex = 0;

    for (let i = 0; i < Texto.length; i++) {
        TextoNumber[i] = (Texto.toUpperCase().charCodeAt(i) - 65)
    }
    for (let i = 0; i < Chave.length; i++) {
        ChaveNumber[i] = (Chave.toUpperCase().charCodeAt(i) - 65)
    }

    for (let i = 0; i < Texto.length; i++) {
        ChaveIndex = ChaveIndex % (Chave.length)

        if (Texto[i] == " ") {
            Decrypted = Decrypted + " "
        } else {
            let Aux = (TextoNumber[i]) - (ChaveNumber[ChaveIndex]);
            if (Aux < 0) {
                Aux += 26;
            }
            Decrypted = Decrypted + String.fromCharCode(Math.abs(Aux) + 65)
        }
        ChaveIndex++;
    }

    return Decrypted;
}