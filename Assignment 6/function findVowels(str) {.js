function findVowels(str) {
    const vowels = str.match(/[aeiou]/gi) || [];
    return vowels;
}

// Example usage
const inputString = prompt("Enter a string:");

const vowels = findVowels(inputString);
console.log(`Vowels in the string: ${vowels.join(", ")}`);
