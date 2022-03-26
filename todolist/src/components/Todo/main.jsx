import React from "react";

import Input from "./input/input";
import List from "./list/list";

import "./style.css";

function Agenda() {
  return (
    <div className="container">
      <h1>What will I do?</h1>
      <div>
        <List />
        <Input />
      </div>
    </div>
  );
}

export default Agenda;
