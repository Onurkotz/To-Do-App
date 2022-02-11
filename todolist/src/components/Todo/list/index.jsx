import { useState } from "react";
import "./style.css";

/*function tick() {
  
   console.log("tuş çalışıyor")
 }

 onClick={tick} 
*/



function List ({listin}) {
  
  function remove(){
    const list = document.querySelector('.list');
    list.classList.add("checked");
  }


  return (
    <div className="row">
      <div className="first">
      <h4>MY AGENDA</h4>
        <ul>
        {listin.map( (listin, i) => (
                <li key={i}>
                  <span className="list" onClick={remove} >
                    {listin.written}
                  </span>
                  
                  </li>
                
            ))} 
        </ul>
      </div>
    </div>
  )
}


export default List;
