import React, { useEffect, useState } from "react";

const UseEffectComponents = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Use Effect is Running!");
    // document.title = count;

    const fetchData=async ()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/todos')
        const result=await api.json();
        console.table(result)

    }
    fetchData(  )
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
};

export default UseEffectComponents;
