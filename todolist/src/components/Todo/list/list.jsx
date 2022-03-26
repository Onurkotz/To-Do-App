import React from "react";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../redux/TodoSlice/todoSlice";

function List() {
  const items = useSelector((state) => state.todo.items);
  console.log(items);

  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="first">
        <h4>MY AGENDA</h4>
        <ul id="unor">
          {items.map((item) => (
            <li
              key={item.id}
              className={item.complete ? "checked" : ""}
              onClick={() => dispatch(toggle({ id: item.id }))}
              checked={item.complete}
            >
              <span className="list">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
