import { isDefined } from "./is";

export function assertDefined<T>(
  v: T | undefined | null,
  msg?: string
): asserts v is T {
  if (!isDefined(v)) {
    throw new Error(
      msg ?? "Asserted that value is defined but was null or undefined"
    );
  }
}
