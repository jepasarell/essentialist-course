import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzbuzz(3)).toBe("string");
  });
  it('returns Fizz for 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });
  it('returns Buzz for 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });
  it('returns FizBuzz for 15', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });
});
