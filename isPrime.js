function isPrime(num) {
    if (num < 2) return `The number ${num} is not a prime number`;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return `The number ${num} is not a prime number`;
    }
    return `The number ${num} is a prime number `;
}

// קבלת פרמטר מהסביבה (Jenkins Parameter)
const inputNumber = parseInt(process.argv[2], 10);
console.log(isPrime(inputNumber));
