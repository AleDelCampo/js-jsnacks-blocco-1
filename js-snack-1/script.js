let firstWorld;

firstWorld = prompt("Ciao, scegli la tua prima parola!!");

document.getElementById("words").innerHTML = `${firstWorld}`;

let secondWorld;

secondWorld = prompt("E adesso, me ne servirebbe, una seconda.");

document.getElementById("words").innerHTML += ` <br> ${secondWorld}`;

if (secondWorld.length > firstWorld.length) {
    document.getElementById("words").innerHTML = `${firstWorld} ${secondWorld}`;
} else if (secondWorld.length < firstWorld.length) {
    document.getElementById("words").innerHTML = `${secondWorld} ${firstWorld}`;
}