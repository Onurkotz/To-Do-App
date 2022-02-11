import { useState } from "react";
import "./style.css";

/*function tick() {
  
   console.log("tuş çalışıyor")
 }

 onClick={tick} 
*/

function List ({listin}) {
  
  
  
  function check(){
    const list = document.querySelector('.list');
    list.classList.toggle("checked")
    console.log("improve this!")
     
  }
    
  

  return (
    <div className="row">
      <div className="first">
      <h4>MY AGENDA</h4>
        <ul>
        {listin.map( (listin, i) => (
                <li key={i}>
                  <span className="list" onClick={check} >
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
