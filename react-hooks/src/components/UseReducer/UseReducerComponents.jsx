import React, { useReducer } from "react";

const UseReducerComponents = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({type:"Increment"})}>Increase</button>
      <button onClick={() => dispatch({type:"Decrement"})}>Decrease</button>
    </>
  );
};

export default UseReducerComponents;
