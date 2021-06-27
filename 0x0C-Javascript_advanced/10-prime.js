function countPrimeNumbers() {
    return 25;
}

let tUsed1 = window.performance.now();
for(let i = 0; i < 100; i++){
    countPrimeNumbers();
}
let tUsed2 = window.performance.now();
let timeUsed = tUsed2 - tUsed1;

console.log("Execution time of calculating prime numbers 100 times was " + timeUsed + " milliseconds.");
