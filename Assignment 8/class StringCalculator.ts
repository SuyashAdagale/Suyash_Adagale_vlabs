class StringCalculator {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    getLength(): number {
        return this.text.length;
    }

    concatenate(str: string): string {
        return this.text.concat(str);
    }

    charAt(index: number): string {
        return this.text.charAt(index);
    }

    charCodeAt(index: number): number {
        return this.text.charCodeAt(index);
    }

    substring(start: number, end?: number): string {
        return this.text.substring(start, end);
    }

    slice(start: number, end?: number): string {
        return this.text.slice(start, end);
    }

    indexOf(searchValue: string): number {
        return this.text.indexOf(searchValue);
    }

    replace(searchValue: string, newValue: string): string {
        return this.text.replace(searchValue, newValue);
    }
}

function performOperations() {
    const inputString = (document.getElementById('inputString') as HTMLInputElement).value;
    const calc = new StringCalculator(inputString);

    const resultsDiv = document.getElementById('results')!;
    resultsDiv.innerHTML = `
        <p>Length: ${calc.getLength()}</p>
        <p>Concatenate ' How are you?': ${calc.concatenate(' How are you?')}</p>
        <p>Char at index 7: ${calc.charAt(7)}</p>
        <p>Char code at index 7: ${calc.charCodeAt(7)}</p>
        <p>Substring from 0 to 5: ${calc.substring(0, 5)}</p>
        <p>Slice from 0 to 5: ${calc.slice(0, 5)}</p>
        <p>Index of 'World': ${calc.indexOf('World')}</p>
        <p>Replace 'World' with 'TypeScript': ${calc.replace('World', 'TypeScript')}</p>
    `;
}
copy right @suyash