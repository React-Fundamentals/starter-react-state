import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({
  initialPerson = { name: "John", location: "NYC" },
  initialCount = 2,
}) {
  const [count, setCount] = useState(initialCount);
  const [person, setPerson] = useState({ ...initialPerson });
  console.log("render");

  function handleIncrement() {
    // console.log("hello world");
    setCount((previousCount) => previousCount + 1);
    // setCount((previousCount) => previousCount + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount((previousCount) =>
      previousCount > 0 ? previousCount - 1 : previousCount
    );
  };

  function handleToggle() {
    const newPerson = {
      name: "Hou",
      location: "Miami",
    };

    setPerson((previousPerson) =>
      previousPerson.name === initialPerson.name
        ? newPerson
        : { ...initialPerson }
    );
  }

  // rendering logic
  const counterClass = count > 10 ? styles.red : undefined;

  // const counterClass = count > 10 && styles.red;

  // let counterClass;
  // if (count > 10) {
  //   counterClass = styles.red;
  // }

  return (
    <section className={styles.container}>
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
