import { useState, useEffect } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("rendering");
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
      abortController.abort();
    };
  }, []);

  const userListItems = users.map((user, index) => (
    <li key={`${user.name}-${index}`}>{user.name}</li>
  ));

  const content = error ? (
    <p>Sorry, we're having trouble loading the users.</p>
  ) : (
    <ul>{userListItems}</ul>
  );

  return (
    <section>
      <h2>Welcome to UsersList</h2>
      {content}
    </section>
  );
}
