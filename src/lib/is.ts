export function isDefined<T>(val: T | undefined | null): val is T {
  return val !== undefined && val !== null;
}

export function isNotDefined<T>(
  val: T | undefined | null
): val is undefined | null {
  return !isDefined(val);
}

export function isFunction<T>(
  val: T | unknown
): val is (...args: any[]) => any {
  return typeof val === "function";
}
