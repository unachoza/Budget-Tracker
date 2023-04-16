import * as React from "react";
import "./DropDownInput.css";

const Type = [
  {
    value: "Expense",
    label: "Expense",
  },
  {
    value: "Income",
    label: "Income",
  },
];

const DropDownInput = () => {
  return (
    <div className="custom-select" style={{ width: "200px", height: "200px", color: "black", border: "solid" }}>
      <select name="Transaction" id="Transaction">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default DropDownInput;
