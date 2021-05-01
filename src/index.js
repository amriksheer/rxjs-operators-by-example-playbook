import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const { interval } = require("rxjs");
const { buffer, take } = require("rxjs/operators");

console.log("# emit the buffer after 1000 ms");
interval(100)
  .pipe(
    buffer(interval(1000)),
    take(3) // <-- just to limit the life of the source Observable
  )
  .subscribe(d => {
    console.log(d);
  });
