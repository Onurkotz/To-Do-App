import { useState, useEffect } from "react";

import Input from "./input/index.jsx";
import List from "./list/index.jsx";

import "./style.css";



function Todo() {

    const [listin, setList] = useState([
        { 
            written: "Öğle yemeği", 
        },
        {
            written: "Arkadaşlarla buluşma",
        }

    ]);

    useEffect( () => {console.log(listin);}, [listin] );

  return (
    <div className="container">
        <h1>What will I do?</h1>
        <div>
        <List listin={listin} />
        <Input addList={setList}  listin={listin} />
        </div>
    </div>
  )
}

export default Todo;
