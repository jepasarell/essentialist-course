export default class PalindromeChecker {
  check(string: string): boolean {
    return string.replace(/ /g, '').toLowerCase().split("").reverse().join("") === string.replace(/ /g, '').toLowerCase();
  }
}
