import { createElement, useState } from "react";
import "./style.css";



function List ({listin}) {
  

  return (
    <div className="row">
      <div className="first">
      <h4>MY AGENDA</h4>
        <ul id="unor">

        {listin.map( (listin, i) => (
        <li key={i}>
        <span className="list" >
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
