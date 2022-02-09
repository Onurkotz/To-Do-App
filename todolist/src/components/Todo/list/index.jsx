import { useState } from "react";
import "./style.css";



function List ({listin}) {


  let time = new Date().toLocaleString();
  
 
      

  return (
    <div className="row">
      <div className="first">
      <h4>{time}</h4>
        <ul>
            {listin.map( (listin, i) => (
                <li key={i}><span>{listin.written}</span></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default List;