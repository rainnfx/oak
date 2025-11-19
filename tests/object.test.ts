import { describe, it, expect } from "vitest";
import * as o from "../src/index";

describe("object validation", () => {
  it("should pass for valid objects", () => {
    const schema = o.object({
      name: o.string(),
      age: o.number(),
    });
    expect(schema.parse({ name: "Caelum", age: 16 })).toEqual({
      name: "Caelum",
      age: 16,
    });
  });

  it("should throw for invalid field types", () => {
    const schema = o.object({
      name: o.string(),
      age: o.number(),
    });
    expect(() => schema.parse({ name: 22, age: "what" })).toThrow();
  });
});
