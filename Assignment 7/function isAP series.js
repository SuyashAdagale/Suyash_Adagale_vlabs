function isAP(series) {
    const difference = series[1] - series[0];
    for (let i = 1; i < series.length - 1; i++) {
        if (series[i + 1] - series[i] !== difference) {
            return false;
        }
    }
    return true;
}

function isGP(series) {
    if (series[0] === 0) return false; 
    const ratio = series[1] / series[0];
    for (let i = 1; i < series.length - 1; i++) {
        if (series[i + 1] / series[i] !== ratio) {
            return false;
        }
    }
    return true;
}

function sumAP(series) {
    const n = series.length;
    const a = series[0];
    const d = series[1] - series[0];
    return (n / 2) * (2 * a + (n - 1) * d);
}

function sumGP(series) {
    const n = series.length;
    const a = series[0];
    const r = series[1] / series[0];
    return a * (1 - Math.pow(r, n)) / (1 - r);
}

// Example usage:
const inputString = prompt("Enter the series as comma-separated values (e.g., 2,4,6,8):");
const series = inputString.split(',').map(Number);

if (isAP(series)) {
    console.log("The series is an Arithmetic Progression (AP).");
    const sum = sumAP(series);
    console.log("The sum of the AP series is ${sum}.");
} else if (isGP(series)) {
    console.log("The series is a Geometric Progression (GP).");
    const sum = sumGP(series);
    console.log("The sum of the GP series is ${sum}.");
} else {
    console.log("The series is neither AP nor GP.");
}