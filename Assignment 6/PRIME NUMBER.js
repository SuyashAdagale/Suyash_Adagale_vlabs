function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;
    }

    return true;
}

// Example usage
const number = parseInt(prompt("Enter a number to check if it's prime:"));

const primeStatus = isPrime(number) ? "is a prime number" : "is not a prime number";
console.log(`${number} ${primeStatus}`);
