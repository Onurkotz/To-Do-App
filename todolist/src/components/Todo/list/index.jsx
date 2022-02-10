import { useState } from "react";
import "./style.css";



function List ({listin}) {


 
 const tick = () => {
  
   
   console.log("tuş çalışıyor")
 }
      

  return (
    <div className="row">
      <div className="first">
      <h4>MY AGENDA</h4>
        <ul>
            {listin.map( (listin, i) => (
                <li key={i}><span className="" onClick={tick}>{listin.written}</span></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default List;