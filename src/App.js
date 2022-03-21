import { useState } from "react";

import Value from "./component/value";

import IncreaseButton from "./component/button";

import DecreaseBtn from "./component/DButton";

const App = () => {

const [count,setCount] = useState(0);

const Increase = ()=>{
  
setCount(count+1);

};

const decrease  = ()=>{
  setCount(count-1);
};


  return(
    <div>
      <Value setvalue={count} />
      
      <IncreaseButton increase={Increase}/>

      <DecreaseBtn DecFun={decrease}/>

    </div>
  )
}

export default App;
