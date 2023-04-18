export default class PalindromeChecker {
  check(string: string): boolean {
    return string.toLowerCase().split("").reverse().join("") === string.toLowerCase();
  }
}
