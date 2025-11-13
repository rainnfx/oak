import { describe, it, expect } from "vitest";
import { number } from "../src/index";

describe("number validation", () => {
  it("should pass for valid numbers", () => {
    const schema = number();
    expect(schema.parse(123)).toBe(123);
  });

  it("should throw for non-numbers", () => {
    const schema = number();
    expect(() => schema.parse("heyo")).toThrow();
  });
});
