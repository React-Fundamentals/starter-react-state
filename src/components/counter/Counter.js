import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(2);

  function handleIncrement() {
    // count = count + 1; // you can't mutate state directly
    setCount((previousCount) => previousCount + 1);
    // setCount((y) => y + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }

  function handleDecrement() {
    setCount((previousCount) => previousCount - 1);
  }

  return (
    <section>
      <h1>John's Counter App</h1>
      <h2>Your current count: {count}</h2>
      <h3>Your current Location: NYC</h3>
      <p>
        When you define a component, a common pattern is for an event handler to
        be a function in the component.
      </p>
      <button onClick={handleIncrement}>increment (+)</button>
      <button onClick={handleDecrement}>decrement (-)</button>
      <button>reset</button>
      <button>toggle</button>
    </section>
  );
}
