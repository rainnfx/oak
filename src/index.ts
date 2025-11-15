function createValidator<T>(type: string) {
  return {
    parse(data: unknown): T {
      if (typeof data === type) {
        return data as T;
      } else {
        throw new Error(`oak error, expected ${type}`);
      }
    },
    safeParse(data: unknown) {
      if (typeof data === type) {
        return { success: true, data: data as T };
      } else {
        return { success: false, error: Error(`oak error, expected ${data}`) };
      }
    },
  };
}

export function string() {
  return createValidator<string>("string");
}

export function number() {
  return createValidator<number>("number");
}

export function boolean() {
  return createValidator<boolean>("boolean");
}
