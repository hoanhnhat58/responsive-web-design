function palindrome(str) {
  var pure = str.replace(/[\W_]/g, "").toLowerCase();
  var x = pure.split("").reverse().join("");
  return pure === x;
}

console.log(palindrome("eye"));
console.log(palindrome("ey e"));
console.log(palindrome("ey"));