let saldoVitorias = rank(100, 22)
let nivel = ""

if (saldoVitorias < 10) {
    nivel = "FERRO"
} else if ((saldoVitorias >= 11) && (saldoVitorias <= 20)) {
    nivel = "BRONZE"
} if ((saldoVitorias >= 21) && (saldoVitorias <= 50)) {
    nivel = "PRATA"
} else if ((saldoVitorias >= 51) && (saldoVitorias <= 80)) {
    nivel = "OURO"
} if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "DIAMANTE"
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "LENDARIO"
} if (saldoVitorias >= 101) {
    nivel = " IMORTAL"
}

console.log("O Heroi tem saldo de " + saldoVitorias + " esta no nivel " + nivel)

function rank(numVitoria, numDerrota) {
    let rankVitoria = numVitoria - numDerrota
    return rankVitoria
}
