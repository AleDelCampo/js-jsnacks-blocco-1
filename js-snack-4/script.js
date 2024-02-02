const first = Number(prompt("Salve!! Inserisci pure le tue 4 cifre."));

const second = Number(prompt("Salve!! Inserisci pure le tue 4 cifre."));

const third = Number(prompt("Salve!! Inserisci pure le tue 4 cifre."));

const fourth = Number(prompt("Salve!! Inserisci pure le tue 4 cifre."));

const sum = first + second + third + fourth;

document.querySelector("#result").innerHTML = `${sum}`;