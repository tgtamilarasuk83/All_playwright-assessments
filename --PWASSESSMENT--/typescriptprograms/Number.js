"use strict";
let num =123456;
let reverse =0;
while (num>0) {
    let digit=num%10
    reverse=reverse*10+digit
    num=num / 10
}
console.log("original",num)
console.log("Reversed",reverse)
