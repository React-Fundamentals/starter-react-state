import Counter from "./components/counter/Counter";
import Form from "./components/form/Form";
import UsersList from "./components/users-list/UsersList";

export default function App() {
  return (
    <>
      {/* <Counter initialCount={8} /> */}
      <UsersList />
      <Form />
    </>
  );
}
