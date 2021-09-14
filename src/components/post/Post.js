import { useEffect, useState } from "react";
import styles from "./Post.module.css";
export default function Post({ id, initialPost = { title: "", body: "" } }) {
  const [post, setPost] = useState({ ...initialPost });

  useEffect(() => {
    const abortController = new AbortController();

    // You’ll typically want to declare functions needed by an effect inside of the effect function. Then it’s easy to see what props or state from the component scope the effect depends on (`id` in this case):
    async function loadPost() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          { signal: abortController.signal }
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPost();

    return () => {
      abortController.abort();
    };
  }, [id]);

  const { title, body } = post;

  return (
    <section className={styles.container}>
      <h1>Title: {title}</h1>
      <h2>This is blog post #{id}</h2>
      <p>{body}</p>
    </section>
  );
}
