function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = array[mid];

        if (midValue === target) {
            return mid; 
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }

    return -1; 
}


const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; // Must be sorted
const target = parseInt(prompt("Enter the number to search for:"), 10);

const index = binarySearch(sortedArray, target);

if (index !== -1) {
    console.log("The target ${target} is at index ${index}.");
} else {
    console.log("The target ${target} is not in the array.");
}