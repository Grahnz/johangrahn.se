/** Resolves after specified milliseconds */
export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
