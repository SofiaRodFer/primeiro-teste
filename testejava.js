function greet(name) {
    console.log("Hello, " + name)
}

greet("Sofia")

var legal = ["olha", "que", "foda"]
    for (var i=0; i < legal.length; i++) {
        console.log("Palavra: " + legal[i])
    }

var counter = 1
    while (counter <= 4) {
        console.log("Currently on number: " + counter)
        counter++
    }

var isMorning = true
var isEvening = !isMorning
console.log("Evening: " + isEvening)

function displayHalf(number) {
    var half = number / 2
    console.log("A metade de 10 é: " + half)
}

displayHalf(10)

function addNumbers (numA, numB) {
    return numA + numB;
}
var result = addNumbers(12,76);
console.log("A soma dos números da função 'addNumbers' é " + result);

function checkHeight(height) {
    if (height < 59) {
        console.log("too tiny bruh")
    } else {
        console.log("you're normal")
    }
}

checkHeight(45);

function conteAteCinco () {
    var conte = 0
    while (conte <= 5) {
        console.log("Contando até cinco: " + conte);
        conte++
    }
}

conteAteCinco();

function conteComStart(conteStart) {
    while (conteStart <= 5) {
        console.log("Contando até 5, começando do número presente no código: " + conteStart);
        conteStart++;
    }
}

conteComStart(-5)

// Função anônima:
var greet = function(user) {
    return "Oi " + user
};
console.log(greet("Tina"))

// Redução de preços
var preços = [10, 20, 30]
console.log("Preços Iniciais: " + preços);

var metade = function(valor) {
    return 0.5*valor;
}

var reduz = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(metade(arr[i]));
    }
}

console.log("Preços Reduzidos: ")
reduz(preços)

// Transformando horas e minutos em segundos

function paraSegundos(horas, minutos) {
    console.log([horas * 60 + minutos] * 60);
}

paraSegundos(4,5)

