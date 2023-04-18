import PalindromeChecker from "./index";

let palindromeChecker: PalindromeChecker;

beforeEach(() => {
  palindromeChecker = new PalindromeChecker();
});

describe("palindrome checker", () => {
  it("exists", () => {
    expect(palindromeChecker).toBeDefined();
  });

  it("should know 'mom' is a palindrome", () => {
    expect(palindromeChecker.check("mom")).toBeTruthy();
  });

  it("should know 'bill' is not a palindrome", () => {
    expect(palindromeChecker.check("bill")).toBeFalsy();
  });

  it("should not care about case", () => {
    expect(palindromeChecker.check("Mom")).toBeTruthy();
  });

  it("should know 'Was It A Rat I Saw' is a palindrome", () => {
    expect(palindromeChecker.check("Was It A Rat I Saw")).toBeTruthy();
  });

  it("should know 'Never Odd or Even' is a palindrome", () => {
    expect(palindromeChecker.check("Never Odd or Even")).toBeTruthy();
  });
});
