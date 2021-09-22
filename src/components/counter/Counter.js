import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({
  initialPerson = { name: "John", location: "NYC" },
  initialCount = 55,
}) {
  const [count, setCount] = useState(initialCount);

  // const [name, setName] = useState(initialPerson.name);
  // const [location, setLocation] = useState(initialPerson.location);

  const [person, setPerson] = useState({ ...initialPerson });

  function handleIncrement() {
    setCount((previousCount) => previousCount + 1);
    // setCount((previousCount) => previousCount + 1);
    // setCount((previousCount) => previousCount + 1);
  }

  function handleDecrement() {
    setCount((previousCount) => previousCount - 1);
  }

  function handleToggle() {
    setPerson((previousPerson) =>
      previousPerson.name === initialPerson.name
        ? { name: "Jane", location: "SF" }
        : { ...initialPerson }
    );
  }

  return (
    <section className={styles.container}>
      <h1>{person.name}'s Counter App</h1>
      <h2>Your current count: {count}</h2>
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
