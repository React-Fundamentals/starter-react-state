// A Hook is a special function that lets you “hook into” React features. For example, `useState` is a Hook that lets you add React state to function components. In legacy React (before Hooks), if you needed to add state to a React component you had to convert it to a class component first, but not anymore!
import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({
  initialPerson = { name: "John", location: "NYC" },
  initialCount = 0,
}) {
  // USESTATE: `useState()` declares a "state variable"; state variable values are preserved between function calls; you can give your state variables any name
  // USESTATE: The only argument to `useState()` is the initial state, which could be any valid JavaScript data type
  // USESTATE: `useState()` returns a pair of values, namely the current state and the function that updates it
  const [count, setCount] = useState(initialCount);

  // USESTATE: Using multiple state variables. React recommends splitting state into multiple state variables based on which values tend to change together.
  const [person, setPerson] = useState(initialPerson);

  // RULES OF HOOKS: Only call hooks at the top level; don’t call Hooks inside loops, conditions, or nested functions. Only call hooks from React functions. Create React App includes ESLint Plugin that helps enforce these rules automatically

  function handleIncrement() {
    if (count < 20) {
      // count = count + 1; // do not mutate state directly
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(initialCount);
  }

  function handleToggle() {
    setPerson(
      person.name === initialPerson.name
        ? { name: "Jane", location: "SF" }
        : initialPerson
    );
  }

  const counterClass =
    count > 10 ? styles.red : count < 5 ? styles.green : null;
  const resetClass = count === initialCount ? styles.hide : null;

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
      <button className={resetClass} onClick={handleReset}>
        reset
      </button>
      <button onClick={handleToggle}>toggle</button>
    </section>
  );
}
