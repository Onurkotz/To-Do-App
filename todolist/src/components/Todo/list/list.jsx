import React from "react";
import "./style.css";

import {useSelector} from "react-redux";

function List() {

  const items = useSelector((state) => state.todo.items)
  
  
  return (
    <div className="row">
      <div className="first">
        <h4>MY AGENDA</h4>
        <ul id="unor">
          {
            items.map((item) => 
           <li key={item.id}>
            <span className="list">{item.title}</span>
          </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default List;
