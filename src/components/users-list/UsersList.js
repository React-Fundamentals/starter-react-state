import { useState, useEffect } from "react";

export default function UsersList() {
  const [name, setName] = useState("Hou");
  const [users, setUsers] = useState([
    { name: "Leanne Graham" },
    { name: "Leanne Graham" },
    { name: "Leanne Graham" },
    { name: "Leanne Graham" },
  ]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("running effect");
    // make the api call here
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

    return () => {
      // Cancel any fetch request when the component unmounts to prevent memory leaks
      abortController.abort();
    };
  }, []);

  function handleName() {
    setName("John");
  }

  const userListItems = users.map(({ name }, index) => (
    <li key={`${name}-${index}`}>{name}</li>
  ));

  const content = error ? (
    <h1>Sorry, we're having trouble loading the users.</h1>
  ) : (
    <ul>{userListItems}</ul>
  );

  return (
    <section>
      <h2>Welcome to the directory of users: {name}</h2>
      {content}
      <button onClick={handleName}>Set name</button>
    </section>
  );
}
