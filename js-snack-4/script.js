numbers = prompt("Immetti quando vuoi le tue 4 cifre.");

if (numbers.length !== 4) {
  alert("TI HO DETTO 4 CIFRE!!");
} else {

    let first = parseInt(numbers.charAt(0));
    let second = parseInt(numbers.charAt(1));
    let third = parseInt(numbers.charAt(2));
    let fourth = parseInt(numbers.charAt(3));
    let sum = first + second + third + fourth;

  document.getElementById("result").innerText = (`La somma delle cifre di ${numbers} è ${sum}.`);
}


   
