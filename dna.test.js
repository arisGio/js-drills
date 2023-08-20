const dnaReverseComplement = require("./dna");

test("DNA DRILL TESTING...", () => {
  expect(dnaReverseComplement("ATGC")).toBe("GCAT");
  expect(dnaReverseComplement("A")).toBe("T");
  expect(dnaReverseComplement("T")).toBe("A");
  expect(dnaReverseComplement("G")).toBe("C");
  expect(dnaReverseComplement("C")).toBe("G");
});
