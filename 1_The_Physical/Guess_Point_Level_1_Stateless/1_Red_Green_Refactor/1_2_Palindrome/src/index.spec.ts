import PalindromeChecker from "./index";

describe("palindrome checker", () => {
  it("exists", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker).toBeDefined();
  });

  it("should know 'mom' is a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.check("mom")).toBeTruthy();
  });
  
  it("should know 'bill' is not a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.check("bill")).toBeFalsy();
  });

});
