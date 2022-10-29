// Problem 1 : Check whether a number is Prime or not
let n = 13;
let count = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    count++;
  }
}
if(count==2){
console.log(n,"is prime");
} else {
console.log(n,"is not a prime");}




// Problem 2 : Check whether a string is palindrome or not.
let str = "naman";
let bag = "";
for (let i = str.length - 1; i >= 0; i--) {
  bag += str[i];
}
if(bag==str) {
console.log(str,"is pallindrome");
} else {
console.log(str,"is not a pallindrome");
}