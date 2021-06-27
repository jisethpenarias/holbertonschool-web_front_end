function countPrimeNumbers() {
    return 25;
}

let tEnd1 = window.performance.now();
for(let i = 0; i < 100; i++){
    countPrimeNumbers();
}
let tEnd2 = window.performance.now();
let timeEnd = tEnd2 - tEnd1;

console.log("Execution time of calculating prime numbers 100 times was " + timeEnd + " milliseconds.");