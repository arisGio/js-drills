// write a function that returns the length of the shortest substring including all differernt characters
// e.g. "bab" -> 2, because "ba" is the shortest substring including all characters.

// export default

const eqSet = (a, b) => {
  return a.size === b.size && [...a].every((elem) => b.has(elem));
};

function shortestSubstring(inputString) {
  /// LOG INPUT
  console.log("inputString: ", inputString);

  /// HANDLING CHARACTERS
  let listOfAllCharacters = new Set(inputString.split(""));
  let minimumLength = listOfAllCharacters.size;
  // const regex = new RegExp(`^[${Array.from(listOfAllCharacters).join("")}]+$`); // eg [abcd]

  /// TESTING HOW REGEX LOOKS LIKE
  // console.log("Regular expression: ", regex);

  let currentString;
  let currentSet;

  for (let chunk = minimumLength; chunk <= inputString.length; chunk++) {
    for (let i = 0; i < inputString.length - chunk + 1; i++) {
      // if (inputString.substr(i, chunk).length === chunk) {
      console.log("found: ", inputString.substr(i, chunk));
      currentString = inputString.substr(i, chunk);
      currentSet = new Set(inputString.substr(i, chunk).split(""));

      if (eqSet(listOfAllCharacters, currentSet)) {
        console.log("found: ", currentString);
        return currentString.length;
      }
      // }

      // just iterate dude and see if it is included
      // I cannot find a proper regex
      // or you can compare sets
      // eg check if there is set1 === set2

      // if (
      //   regex.test(inputString.substr(i, chunk)) &&
      //   inputString.substr(i, chunk).length === chunk
      // ) {
      //   console.log("found: ", inputString.substr(i, chunk));
      //   return inputString.substr(i, chunk).length;
      // }
    }
  }
}

console.log(shortestSubstring("abcbbjgbbbb")); // abc

/// TESTING REGULAR EXPRESSIONS
// console.log("Testing Regular Expression: ", RegExp("^[abcfg]+$").test("abcaf"));

/// TESTING SUBSTR BEHAVIOR WHEN REACHING THE END
// console.log("test", "abc".substr(2, 2)); // test c, special case when reaching the end

module.exports = shortestSubstring;
