import { useState, useEffect } from "react";

import Input from "./input/index.jsx";
import List from "./list/index.jsx";

import "./style.css";



function Todo() {

    const [listin, setList] = useEffect([
        { 
            written: "Öğle yemeği", 
        },
        {
            written: "Arkadaşlarla buluşma",
        }

    ]);

    

  return (
    <div>
        <h1>What will I do?</h1>
        <List listin={listin} />
        <Input addList={setList}  listin={listin} />
    </div>
  )
}

export default Todo;