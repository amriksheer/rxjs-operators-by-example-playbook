import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const { of } = require("rxjs");
const { reduce } = require("rxjs/operators");

console.log("# sum of sequence");
console.log("# like scan, but only emits the final value");

of(2, 4, 6)
  .pipe(reduce((a, c) => a + c, ))
  .subscribe(x => console.log(x));
