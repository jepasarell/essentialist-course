export default class PalindromeChecker {
  private removeSpaces(string: string): string {
    return string.replace(/ /g, "");
  }
  private reverseString(string: string): string {
    return string.split("").reverse().join("");
  }

  check(string: string): boolean {
    const reversedString = this.reverseString(string);
    return (
      this.removeSpaces(string).toLowerCase() ===
      this.removeSpaces(reversedString).toLowerCase()
    );
  }
}
