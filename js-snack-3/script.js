const myArray = [];

for (let i = 0; i < "6"; i++) {
    let userNumbers;

    userNumbers = parseInt(prompt("Benvenuto!! Potresti fornirmi i tuoi 6 numeri dispari??"));

    if(userNumbers % 2 == 0) {
        document.getElementById("even").innerHTML = `Questi ${userNumbers} non mi servono ti ho detto!!`
    } else {
        myArray.push(`${userNumbers}`)
    }
   
    document.getElementById("numbers").innerHTML = `${myArray}`;
};

