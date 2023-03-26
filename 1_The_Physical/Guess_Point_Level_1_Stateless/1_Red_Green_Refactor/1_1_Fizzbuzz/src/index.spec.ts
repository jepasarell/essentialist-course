import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzbuzz(3)).toBe("string");
  });
  it("returns Fizz for 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("returns Buzz for 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it("returns FizBuzz for 15", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
  it("returns Fizz for 9", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });
  it("returns Fizz for 12", () => {
    expect(fizzbuzz(12)).toEqual("Fizz");
  });
  it("returns 13 for 13", () => {
    expect(fizzbuzz(13)).toEqual("13");
  });
  it("returns 7 for 7", () => {
    expect(fizzbuzz(7)).toEqual("7");
  });
});
