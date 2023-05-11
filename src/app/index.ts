import { isDefined } from "../lib/is";
import { sleep } from "../lib/sleep";

export function startApp(root: Element) {
  async function* typeText(text: string) {
    const lines = text.split(`\n`);

    for (const line of lines) {
      await sleep(25 * line.length);
      const words = line.split(" ");
      for (const word of words) {
        await sleep(25 * word.length);

        const chars = [...word];
        for (const char of chars) {
          await sleep(100 * Math.random());
          yield char;
        }
        sleep(10);
        yield " ";
      }
      yield "\n";
    }
  }

  async function generate() {
    for await (const output of typeText(
      Array(100).fill(`// TODO: implement everything`).join("\n")
    )) {
      root.textContent += output;
    }
  }

  generate();
}

function* generator() {
  return 1;
}

generator();
