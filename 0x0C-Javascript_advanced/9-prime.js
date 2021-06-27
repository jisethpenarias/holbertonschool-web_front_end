function countPrimeNumbers() {
    return 25;
}

let tUsed1 = window.performance.now();
countPrimeNumbers();
let tUsed2 = window.performance.now();
let timeUsed = tUsed2 - tUsed1;

console.log("Execution time of printing countPrimeNumbers was " + timeUsed + " milliseconds.");