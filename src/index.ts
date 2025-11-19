type Infer<T> = T extends { _type: infer R } ? R : never;

type InferShape<T> = {
  [K in keyof T]: Infer<T[K]>;
};

function createValidator<T>(type: string) {
  return {
    _type: undefined as any as T,
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

export function object<T extends Record<string, { parse(data: unknown): any }>>(
  shape: T
) {
  return {
    _type: undefined as any as InferShape<T>,
    parse(data: any): InferShape<T> {
      if (typeof data !== "object" || data === null) {
        throw new Error("oak error, expected object");
      } else {
        for (const key in shape) {
          const validator = shape[key];
          const value = data[key];

          validator.parse(value);
        }
        return data as InferShape<T>;
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
