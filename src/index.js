import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "react-testing-library";

import "./index.css";

import Dashboard from "./dashboard/Dashboard";

ReactDOM.render(<Dashboard />, document.getElementById("root"));

afterEach(rtl.cleanup);
