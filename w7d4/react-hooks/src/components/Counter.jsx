import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import Button from "./Button";
 
function Counter() {
  const [count, setCount] = useState(0);
  const [storeNumber, setStoreNumber] = useState(null);

//   useEffect(() => {
//     console.log('This will execute during the initial render :)')
//   }, [])

//   useEffect(() => {
//     console.log('This will run when my initial render happens and my count updates :)')
//   }, [count])

//   useEffect(() => {
//     console.log('This will run when my initial render happens and my storeNumber updates :)')
//   }, [storeNumber])

  useEffect(() => {
    if(count !== 0 && storeNumber !== null){
        console.log('This will run only if both the count and storeNumber have been updated :)')
    }
    console.log('This will run when my initial render happens and my storeNumber or count updates :)')

  }, [count, storeNumber])
 
  return (
    <div className="Counter">
      <h2>Counter</h2>
 
        <Summary count={count} storeNumber={storeNumber} />

        <Button count={count} setCount={setCount} buttonContent={"-"} />
        <Button count={count} setCount={setCount} buttonContent={"+"} />
        {/* <button onClick={() => setCount(count - 1)}> - </button> */}
        {/* <button onClick={() => setCount(count + 1)}> + </button>  */}
        <button onClick={() => setStoreNumber(count)}>Store Count</button>

    </div>
  );
}
 
export default Counter;