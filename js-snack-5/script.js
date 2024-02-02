userNumber = prompt("Benvenuto!! Scegli pure un numero.");

for (let i = 1; i <=`${userNumber}`; i++) {
    document.getElementById("number").innerHTML += Math.pow(i , 3);
    document.getElementById("number").innerText += " ";
};






