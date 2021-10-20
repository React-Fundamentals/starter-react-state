import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({ initialCount = 6 }) {
  let [count, setCount] = useState(initialCount);
  const [person, setPerson] = useState({ name: "Jane", location: "NYC" });

  console.log("re-rendering");

  function handleIncrement() {
    // count = count + 1; // you can't mutate state directly
    setCount((previousCount) =>
      previousCount < 20 ? previousCount + 1 : previousCount
    );
    // setCount((y) => y + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }

  function handleDecrement() {
    setCount((previousCount) =>
      previousCount > 0 ? previousCount - 1 : previousCount
    );
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

  function handleReset() {
    setCount(initialCount);
  }

  const counterClass =
    count > 10 ? styles.red : count < 5 ? styles.green : null;

  // let counterClass;
  // if (count > 10) {
  //   counterClass = styles.red;
  // } else if (count < 5) {
  //   counterClass = styles.green;
  // }

  const resetClass = count === initialCount ? styles.hide : null;

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
      <button className={resetClass} onClick={handleReset}>
        reset
      </button>
      <button onClick={handleToggle}>toggle</button>
    </section>
  );
}
