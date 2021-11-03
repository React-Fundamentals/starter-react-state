import React, { useState, useEffect } from "react";

export default function UsersList() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
  ]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("running effect");

    const abortController = new AbortController();
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: abortController.signal }
        );
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError(true);
      }
    }

    loadUsers();

    // cleanup function
    return () => {
      // cancel fetch request when the component unmounts
      abortController.abort();
    };
  }, []);

  // useEffect(() => {
  //   // start a timer
  // }, []);

  function handleClick() {
    setCount((previousCount) => previousCount + 1);
  }

  const usersListItems = users.map(({ name }, index) => (
    <li key={`${name}-${index}`}>{name}</li>
  ));

  const content = error ? (
    <p>Sorry, we're having trouble loading the users</p>
  ) : (
    <ul>{usersListItems}</ul>
  );

  return (
    <section>
      <button onClick={handleClick}>click me</button>
      <h2>Welcome to the directory of users:</h2>
      {content}
    </section>
  );
}
