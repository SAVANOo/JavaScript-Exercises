console.log(EncryptVegenere("Hello World", 1)) // Null
console.log(EncryptVegenere(1, "Abc")) // Null
console.log(EncryptVegenere(1, 2)) // Null
console.log(EncryptVegenere("Hello World", "SAVIO")) // ZEGTC WJZZV
console.log(EncryptVegenere("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "B")) // BCDEFGHIJKLMNOPQRSTUVWXYZA
console.log(EncryptVegenere("ABCDEFGHIJ", "EFGH"))// EGIKIKMOMO
console.log(EncryptVegenere("abcdefghij", "efgh")) // EGIKIKMOMO

function EncryptVegenere(Texto, Chave) {
    if (typeof Texto !== 'string' || typeof Chave !== 'string') {
        return null;
    }

    let TextoNumber = [];
    let ChaveNumber = [];
    let Encrypted = "";
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
            Encrypted = Encrypted + " "
        } else {
            Encrypted = Encrypted + String.fromCharCode((TextoNumber[i] + (ChaveNumber[ChaveIndex])) % 26 + 65)
        }
        ChaveIndex++;
    }

    return Encrypted;
}