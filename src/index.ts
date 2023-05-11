import { startApp } from "./app";
import { assertDefined } from "./lib/assert";

const rootElement = document.getElementById("root");

assertDefined(rootElement);

startApp(rootElement);
