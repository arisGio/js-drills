const shortestSubstring = require("./shortest.cjs");

test("SHORTEST SUBSTRING DRILL TESTING...", () => {
  expect(shortestSubstring("abc")).toBe(3);
  expect(shortestSubstring("abca")).toBe(3);
  expect(shortestSubstring("abcb")).toBe(3);
  expect(shortestSubstring("abcc")).toBe(3);
  expect(shortestSubstring("abcaaaa")).toBe(3);
  expect(shortestSubstring("aaabcaa")).toBe(3);
});
