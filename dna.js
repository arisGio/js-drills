// write a function that computes the REVERSE COMPLEMENT of a dna sequence
// A  with T
// G with C

// export default function dnaReverseComplement(dnaSequense) {
function dnaReverseComplement(dnaSequense) {
  return dnaSequense
    .split("")
    .reverse()
    .map((elem) => {
      if (elem === "A") {
        return "T";
      } else if (elem === "T") {
        return "A";
      } else if (elem === "G") {
        return "C";
      } else if (elem === "C") {
        return "G";
      }
    })
    .join("");
}

console.log(dnaReverseComplement("ATGC")); // GCAT

module.exports = dnaReverseComplement;
