import { useState } from "react";
import "./style.css";

function List ({listin}) {

    //const [ordering, setOrderText] = useState("");

  return (
    <div>
      <ul>
          {listin.map( (listin, i) => (
              <li key={i}><span>{listin.written}</span></li>
          ))}
      </ul>
    </div>
  )
}

export default List;