function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const num = parseInt(prompt("Enter a number to calculate its factorial:"));

const fact = factorial(num);
console.log(`The factorial of ${num} is ${fact}`);
