function calculateCircleArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Example usage
const radius = parseFloat(prompt("Enter the radius of the circle:"));

const area = calculateCircleArea(radius);
console.log(`The area of the circle is ${area}`);
