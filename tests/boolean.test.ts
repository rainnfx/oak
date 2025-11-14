import { describe, it, expect } from "vitest";
import { boolean } from "../src/index";

describe("boolean validation", () => {
  it("should pass for a valid boolean", () => {
    const schema = boolean();
    expect(schema.parse(true)).toBe(true);
  });

  it("should throw for non-bools", () => {
    const schema = boolean();
    expect(() => schema.parse("what")).toThrow();
  });
});
