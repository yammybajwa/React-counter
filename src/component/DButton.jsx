import React from "react";



import "./stylr/style.scss";


const DecreaseBtn = ({DecFun})=>(

    <button className="btn draw-border" onClick={DecFun}>Decrease</button>
)

export default  DecreaseBtn;