//Problem: Count Vowel in a String.
function countVowel(word) {
  let count = 0;
  let vowels = "aeiou";
  word = word.toLowerCase();
  for (let i = 0; i <= word.length - 1; i++) {
    let letter = word[i];
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
console.log(countVowel("bcd"));
console.log(countVowel("Programming Hero"));
console.log(countVowel("AEIOUAEO")); //!Important
