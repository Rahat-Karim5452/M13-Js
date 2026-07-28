//check is a String is Palindrome or Not ;
function palindromeCheck(str) {
  let reverseStr = str.split("").reverse("").join("");
  if (reverseStr === str) {
    return "palindrome";
  } else {
    return "Not palindrome";
  }
}
console.log(palindromeCheck("abba"));
console.log(palindromeCheck("abc"));
console.log(palindromeCheck("baba"));
console.log(palindromeCheck("amma"));
