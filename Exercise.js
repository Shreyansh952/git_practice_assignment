// Problem 1 : Check whether a number is Prime or not
let n = 13;
let count = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    count++;
  }
}





// Problem 2 : Check whether a string is palindrome or not.
let str = "naman";
let bag = "";
for (let i = str.length - 1; i >= 0; i--) {
  bag += str[i];
}
