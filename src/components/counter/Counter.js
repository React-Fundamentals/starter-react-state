import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({
  initialPerson = { name: "John", location: "NYC" },
  initialCount = 55,
}) {
  const [count, setCount] = useState(initialCount);

  function handleIncrement() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <section className={styles.container}>
      <h1>{initialPerson.name}'s Counter App</h1>
      <h2>Your current count: {count}</h2>
      <h3>Your current Location: {initialPerson.location}</h3>

      <p>
        When you define a component, a common pattern is for an event handler to
        be a function in the component.
      </p>
      <button onClick={handleIncrement}>increment (+)</button>
      <button>decrement (-)</button>
      <button>reset</button>
      <button>toggle</button>
    </section>
  );
}
