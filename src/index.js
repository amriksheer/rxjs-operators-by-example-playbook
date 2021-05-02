import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const { of } = require("rxjs");
const { reduce } = require("rxjs/operators");

console.log("# sum of sequence");
console.log("# like scan, but only emits the final value");
of(1, 2, 3)
  .pipe(reduce((acc, val) => acc + val, 0))
  .subscribe(x => console.log(x));
