for (let i = 0; i < "10"; i++) {
    let userNumbers;

    userNumbers = prompt("Benvenuto!! Potresti fornirmi i tuoi 10 numeri??");

    document.getElementById("numbers").innerHTML = `${userNumbers + userNumbers - userNumbers}`;
}