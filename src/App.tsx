import React from "react";
import DropDownInput from "./Components/Inputs/DropDownInput";
import Form from "./Components/Form/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Expenses & Budget</p>
      <Form />
      <DropDownInput />
    </div>
  );
}

export default App;
