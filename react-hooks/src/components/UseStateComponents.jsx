import React, { useState } from 'react'

const UseStateComponents = () => {
    const [counter,setCounter]=useState(0);



        // let counter=0;
        const increase=()=>{
            setCounter(counter+1)
            console.log(counter)
        }
        const decrease=()=>{
            setCounter(counter-1)
            // counter--;
            console.log(counter)
        }
        

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>

</>
  )
}

export default UseStateComponents