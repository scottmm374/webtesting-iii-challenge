// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import { fireEvent } from "@testing-library/react";
import { findByText } from "react-testing-library";
// Controls
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open

// Gate

// defaults to unlocked and open
// cannot be closed or opened if it is locked

afterEach(rtl.cleanup);

test("Lock gate, closes Gate", () => {
  const { getByText } = rtl.render(<Controls />);

  fireEvent(
    getByText(/lock gate/i),
    new MouseEvent("click", {
      gate: /close gate/i
    })
  );
});

test("unlock gate, opens Gate", async () => {
  const { getByText } = rtl.render(<Controls />);

  await fireEvent(
    getByText(/unlock gate/i),
    new MouseEvent("click", {
      gate: /open gate/i
    })
  );
});
