import React from "react";

import "./styles.css";

const Element = ({ label, key }) => (
  <div
    onClick={() => {
      window.location.href = label.link;
    }}
    key={key}
    className="element"
  > <div id="icon"> {label.icon} </div>
    
    <div id="title"> {label.title} </div>
  </div>
);

export default Element;
