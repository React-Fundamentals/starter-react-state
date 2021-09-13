import Counter from "./components/counter/Counter";
import Form from "./components/form/Form";

export default function App() {
  return (
    <>
      <Counter name="Hou" initialCount={2} />
      <Form />
    </>
  );
}
