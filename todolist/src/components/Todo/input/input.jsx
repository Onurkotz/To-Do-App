import { useState } from "react";
import "./style.css";

import { newAdd } from "../../../redux/TodoSlice/todoSlice";
import { useDispatch } from "react-redux";
import {nanoid} from "@reduxjs/toolkit"

function Input() {
  const [title, setTitle] = useState("");
  

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(title===""){
      return false;
    }
    console.log(title);
    dispatch(newAdd({ id: nanoid(), title, complete: false }));
    setTitle("");
    
   
  };

  return (
    <div className="row">
      <div className="second">
        <form onSubmit={handleSubmit}>
          <div className="formd">
            <input
              name="written"
              placeholder="Write here what will you do."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>
          <div className="but1">
            <button className="but">
              Add List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
