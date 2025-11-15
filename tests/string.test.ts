import { describe, it, expect } from "vitest";
import { string } from "../src/index";

describe("string validation", () => {
  it("should pass for valid strings", () => {
    const schema = string();
    expect(schema.parse("hello")).toBe("hello");
    const result = schema.parse("hello");
  });

  it("should pass for valid strings under safeParse", () => {
    const schema = string();
    expect(schema.safeParse("hello")).toEqual({ data: "hello", success: true });
    const result = schema.safeParse("hello");
  });

  it("should throw for non-strings", () => {
    const schema = string();
    expect(() => schema.parse(123)).toThrow();
  });
});
