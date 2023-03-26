export default function fizzbuzz(number: number): string {
  if (number > 100 || number < 1) {
    throw new Error('Number has to be from 1 to 100')
  }
  let result = "";
  if (number % 3 === 0) {
    result += "Fizz";
  }
  if (number % 5 === 0) {
    result += "Buzz";
  }
  return result || String(number);
}
