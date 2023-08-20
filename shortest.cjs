// write a function that returns the length of the shortest substring including all differernt characters
// e.g. "bab" -> 2, because "ba" is the shortest substring including all characters.

// export default
function shortestSubstring(inputString) {
  // find all separate chars that comprise the string
  // count them -> output minimum value
  // use regex to track acceptable substrings that satisfy condition
  // e.g. if chars are abcd -> /^[abcd]+$/
  // which means that whichever is left to + must be present and not other chars
  // now this is dynamic, we will use string interpolation
  // track the shortest one
  // return the length of the shortest one, less it can is the MINIMUM value
  return inputString;
}

console.log(shortestSubstring("bab"));

module.exports = shortestSubstring;
