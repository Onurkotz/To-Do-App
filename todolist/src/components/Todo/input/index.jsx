import { useState, useEffect } from "react";

import "./style.css";

const initialForm = { written: ""}

function Input( { addList, listin } ) {

    const [inputVal, setInputVal] = useState(initialForm);

    useEffect( () => {setInputVal(initialForm);}, [listin]);

    const onChangeInput = (e) => {
        setInputVal({...inputVal, [e.target.name]: target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputVal == ""){
            return false;
        }

        addList([...listin, inputVal]);
    }


  return (
    <form onSubmit={onSubmit}>
        <div>
            <input name="written" placeholder="Write what you do." value={inputVal.written} onChange={onChangeInput} />
        </div>
      <div>
        <button>Add List</button>
      </div>
      
    </form>
  )
}

export default Input;
