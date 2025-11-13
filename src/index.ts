function createValidator(type: string) {
  if (type === "string") {
    return {
      parse(data: unknown) {
        if (typeof data === "string") {
          return data;
        } else {
          throw new Error("oak error, expected string");
        }
      },
    };
  } else if (type === "number") {
    return {
      parse(data: unknown) {
        if (typeof data === "number") {
          return data;
        } else {
          throw new Error("oak error, expected number");
        }
      },
    };
  } else {
    throw new Error("oak: invalid validation option");
  }
}

export function string() {
  return createValidator("string");
}

export function number() {
  return createValidator("number");
}
