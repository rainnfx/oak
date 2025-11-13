export function string() {
  return {
    parse(data: unknown) {
      if (typeof data === "string") {
        return data;
      } else {
        throw new Error("oak error, expected string");
      }
    },
  };
}

export function number() {
  return {
    parse(data: unknown) {
      if (typeof data === "number") {
        return data;
      } else {
        throw new Error("oak error, expected number");
      }
    },
  };
}
