// write a function that returns the length of the shortest substring including all differernt characters
// e.g. "bab" -> 2, because "ba" is the shortest substring including all characters.

// export default

const eqSet = (a, b) => {
  return a.size === b.size && [...a].every((elem) => b.has(elem));
};

function shortestSubstring(inputString) {
  /// LOG INPUT
  // console.log("inputString: ", inputString);

  /// HANDLING CHARACTERS
  let listOfAllCharacters = new Set(inputString.split(""));
  let minimumLength = listOfAllCharacters.size;
  let currentString;
  let currentSet;

  for (let chunk = minimumLength; chunk <= inputString.length; chunk++) {
    for (let i = 0; i < inputString.length - chunk + 1; i++) {
      currentString = inputString.substr(i, chunk);
      currentSet = new Set(inputString.substr(i, chunk).split(""));

      if (eqSet(listOfAllCharacters, currentSet)) {
        // console.log("found: ", currentString);
        return currentString.length;
      }
    }
  }
}

// console.log(shortestSubstring("abcbcaaaaa"));

module.exports = shortestSubstring;
