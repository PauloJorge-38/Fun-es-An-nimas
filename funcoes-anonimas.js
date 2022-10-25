
// estrutura simples
function somar(a, b) {
    return a + b
}

let operacao = somar

console.log(operacao(4, 25))


//Função anônimas atribuida dentro das variaveis
operacao = function (a, b) {
    return a - b
}

console.log(operacao(4, 25))


olaMundo()



function olaMundo() {
    console.log("Olá Mundo!")
}

// só pode acessar as funções anônimas depois da inicialização das variaveis
const oiMundo = function () {
    console.log("Oi, Mundo")
}

oiMundo()