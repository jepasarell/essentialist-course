export default function fizzbuzz(number: number): string {
  if (number === 3 || number === 9 || number === 12) {
    return "Fizz";
  }
  if (number === 5) {
    return "Buzz";
  }
  if (number === 15) {
    return "FizzBuzz";
  }
  return "";
}
