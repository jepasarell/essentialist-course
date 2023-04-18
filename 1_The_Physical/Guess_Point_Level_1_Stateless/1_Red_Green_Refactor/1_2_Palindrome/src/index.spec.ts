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
});
