function isPalindrome(word) {
  let wordReverse = word.split("").reverse().join("");
  return word===wordReverse;
}

/* 
  Add your pseudocode here
*/

/*
A palindrome is a word which when reversed, the arrangement of the letters initially coincides
with the arrangement of the reversed word for example bus and sub.The algorithm above creates a variable
named wordReverse which is the reversed string of the word argument. The return statement , returns a boolean
value (true if the word is a palindrome OR false if not).  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
