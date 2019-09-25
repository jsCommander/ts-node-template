import { test } from "./test-function";
describe("test function", () => {
  it("should return correct message", () => {
    expect(test()).toBe("It is working!");
  });
});
