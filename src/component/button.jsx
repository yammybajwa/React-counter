import React from "react";

import "./stylr/style.scss";

const IncreaseButton = ({increase})=>(

    <button className="btn draw-border" onClick={increase}>Increase</button>
) 

export default IncreaseButton;