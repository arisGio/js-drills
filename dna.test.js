const dnaReverseComplement = require("./dna");
// import { dnaReverseComplement } from "./dna";

test("DNA DRILL TESTING...", () => {
  expect(dnaReverseComplement("ATGC")).toBe("GCAT");
  expect(dnaReverseComplement("A")).toBe("T");
  expect(dnaReverseComplement("T")).toBe("A");
  expect(dnaReverseComplement("G")).toBe("C");
  expect(dnaReverseComplement("C")).toBe("G");
});
