import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const { of, timer } = require("rxjs");
const { concatAll, mergeAll, take, delay } = require("rxjs/operators");

const source1 = timer(0, 1).pipe(take(10));

const workingDays = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday"];
const source2 = of(...workingDays).pipe(delay(15));

const weekends = ["Saturday", "Sunday"];
const source3 = of(...weekends).pipe(delay(35));


console.log("# merge working days and weekends");
of(source1, source2, source3)
  .pipe(concatAll(1))
  .subscribe(x => console.log(x));
