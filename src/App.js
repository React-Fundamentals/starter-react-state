import Counter from "./components/counter/Counter";
import Form from "./components/form/Form";
import Post from "./components/post/Post";
import UsersList from "./components/users-list/UsersList";

export default function App() {
  return (
    <>
      <Counter name="Hou" initialCount={2} />
      <UsersList />
      <Post id={1} />
      <Post id={2} />
      <Post id={3} />
      <Form />
    </>
  );
}
