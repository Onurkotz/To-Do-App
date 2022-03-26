import React from "react";

import "./style.css";

function Input() {
  return (
    <div className="row">
      <div className="second">
        <form>
          <div className="formd">
            <input name="written" placeholder="Write what will you do." />
          </div>
          <div className="but1">
            <button className="but">Add List</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
