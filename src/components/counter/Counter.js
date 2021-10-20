import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  let [count, setCount] = useState(2);
  const [person, setPerson] = useState({ name: "Jane", location: "NYC" });

  console.log("re-rendering");

  function handleIncrement() {
    // count = count + 1; // you can't mutate state directly
    setCount((previousCount) => previousCount + 1);
    // setCount((y) => y + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }

  function handleDecrement() {
    setCount((previousCount) => {
      return previousCount > 0 ? previousCount - 1 : previousCount;
    });
  }

  function handleToggle() {
    setPerson(({ name }) => {
      return name === "Jane"
        ? {
            name: "John",
            location: "SF",
          }
        : {
            name: "Jane",
            location: "NYC",
          };
    });
  }

  const counterClass = count > 10 ? styles.red : null;

  return (
    <section>
      <h1>{person.name}'s Counter App</h1>
      <h2 className={counterClass}>Your current count: {count}</h2>
      <h3>Your current Location: {person.location}</h3>
      <p>
        When you define a component, a common pattern is for an event handler to
        be a function in the component.
      </p>
      <button onClick={handleIncrement}>increment (+)</button>
      <button onClick={handleDecrement}>decrement (-)</button>
      <button>reset</button>
      <button onClick={handleToggle}>toggle</button>
    </section>
  );
}
