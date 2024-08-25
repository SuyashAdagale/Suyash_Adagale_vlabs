
function calculateTriangleArea(a, b, c) {
    // Calculate semi-perimeter
    const s = (a + b + c) / 2;
    
    // Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage
const a = parseFloat(prompt("Enter the length of side a:"));
const b = parseFloat(prompt("Enter the length of side b:"));
const c = parseFloat(prompt("Enter the length of side c:"));

const area = calculateTriangleArea(a, b, c);
console.log(`The area of the triangle is ${area}`);
