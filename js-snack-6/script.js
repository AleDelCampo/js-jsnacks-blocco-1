userNumber = prompt("Benvenuto!! Scegli pure un numero.");

for (let i = 1; i <=`${userNumber}`; i++) {
    let raise = Math.pow(i, 3);
    document.getElementById("number").innerHTML += raise;
    document.getElementById("number").innerText += " ";

    
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (`${userNumber}`<= 10) {
        sum += Math.pow(numbers[i], 3);
        document.getElementById("sum").innerHTML = sum;
    }

    document.getElementById("average").innerHTML = `${sum / 10}`;
};


    










