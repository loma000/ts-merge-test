import { describe } from "node:test";

export {};
const { merge } = require("./merge");

describe("test", () => {
  test("test1", () => {
    const result = merge([1, 2, 3], [2, 3, 4], [9, 8, 7, 6]);

    expect(result).toEqual([1, 2, 2, 3, 3, 4, 6, 7, 8, 9]);
  });

  test("test2", () => {
    const result = merge([], [2, 3, 4], [98, 88, 71, 3]);

    expect(result).toEqual([2, 3, 3, 4, 71, 88, 98]);
  });

  test("test3", () => {
    const result = merge([], [], []);

    expect(result).toEqual([]);
  });
});
