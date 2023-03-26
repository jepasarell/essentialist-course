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
});
