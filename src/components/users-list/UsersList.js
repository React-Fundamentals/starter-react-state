import { useEffect, useState } from "react";
import styles from "./UsersList.module.css";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  // The Effect Hook lets you perform side effects in function components (e.g., data fetching/network requests, setting up a subscription, starting a timer, logging, manual DOM updates etc.). It tells React that your component needs to do something after render. React will remember the function you passed (or the “effect”), and call it later after performing the DOM updates.
  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/AbortController
    const abortController = new AbortController();

    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: abortController.signal }
        );
        const data = await response.json();
        // You can access the state updater function from inside the effect
        setUsers(data);
      } catch (error) {
        setError(true);
      }
    }

    loadUsers();

    // Return a function that describes how to clean up after this effect
    return () => {
      // Cancelling any fetch request when the component unmounts to prevent memory leaks
      abortController.abort();
    };
  }, []); // By default, useEffect() runs both after the first render and after every update. Specifying an empty dependency array as a second argument restricts the effect to run only once after the first render or when the component mounts for the first time.

  const userListItems = users.map((user, index) => {
    return <li key={`${user.name}-${index}`}>{user.name}</li>;
  });

  const content = error ? (
    <p>Sorry, we're having trouble loading the users.</p>
  ) : (
    <ul>{userListItems}</ul>
  );

  return (
    <section className={styles.container}>
      <h2>Welcome to the directory of users:</h2>
      {content}
    </section>
  );
}
