// 1. import
import React, { useState, useEffect } from "react";

export default function Timer() {
  // 2. define variable counter
  const [counter, setCounter] = useState(0);

  // 3. add side-effect - we do not call useEffect
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  });

  return (
    <>
      <h2>Counter: {counter}</h2>
    </>
  );
}