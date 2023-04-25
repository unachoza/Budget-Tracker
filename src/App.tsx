import React from "react";
import DropDownInput from "./Components/Inputs/DropDownInput";
import Form from "./Components/Form/Form";
import Chart from "./Components/Charts/Charts.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <p>Expenses & Budget</p>
      </div>
      <div className="body">
        <Chart title="Income" />
        <Form />
        <Chart title="Expenses" />
      </div>
    </div>
  );
}

export default App;
