export default class PalindromeChecker {
  check(string: string): boolean {
    return string.split("").reverse().join("") === string;
  }
}
