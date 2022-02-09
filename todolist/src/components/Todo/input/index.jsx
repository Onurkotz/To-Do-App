import { useState, useEffect } from "react";

import "./style.css";

const initialForm = { written: ""}

function Input( { addList, listin } ) {

    const [inputVal, setInputVal] = useState(initialForm);

    useEffect( () => {setInputVal(initialForm);}, [listin]);

    const onChangeInput = (e) => {
        setInputVal({...inputVal, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputVal == ""){
            return false;
        }

        addList([...listin, inputVal]);
    }


  return (
    <div className="row">
      <div className="second">
      <form onSubmit={onSubmit} className="">
        <div className="formd">
            <input name="written" placeholder="Write what will you do." value={inputVal.written} onChange={onChangeInput} />
        </div>
        <div className="but1">
        <button className="but">Add List</button>
        </div>
      
    </form>
      </div>
    </div>
  )
}

export default Input;
