let num: number = 12345;
let original: number = num;
let reverse: number = 0;

while (num > 0) {
    let digit: number = num % 10;
    reverse = reverse * 10 + digit;
    num = num / 10;
}

console.log("Original Number:", original);
console.log("Reversed Number:", reverse);