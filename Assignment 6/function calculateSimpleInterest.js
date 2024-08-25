function calculateSimpleInterest(principal, rate, time) {
    const interest = (principal * rate * time) / 100;
    return interest;
}

// Example usage
const principal = parseFloat(prompt("Enter the principal amount:"));
const rate = parseFloat(prompt("Enter the rate of interest:"));
const time = parseFloat(prompt("Enter the time (in years):"));

const interest = calculateSimpleInterest(principal, rate, time);
console.log(`The simple interest is ${interest}`);
