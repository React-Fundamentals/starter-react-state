import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({
  initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  },
}) {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // function handleFirstNameChange(event) {
  //   setFormData((data) => ({
  //     ...data,
  //     firstName: event.target.value,
  //   }));
  // }

  // function handleLastNameChange(event) {
  //   setFormData((data) => ({
  //     ...data,
  //     lastName: event.target.value,
  //   }));
  // }

  // function handleEmailChange(event) {
  //   setFormData((data) => ({
  //     ...data,
  //     email: event.target.value,
  //   }));
  // }

  // function handleMessageChange(event) {
  //   setFormData((data) => ({
  //     ...data,
  //     message: event.target.value,
  //   }));
  // }

  function handleChange({ target: { name, value } }) {
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function handleReset() {
    setFormData({ ...initialFormData });
    setIsSubmitted(false);
  }

  const { message, firstName, lastName, email } = formData;

  let content;
  // check whether or not message is empty
  if (isSubmitted) {
    content = (
      <>
        {!message.length ? (
          <p>Hey {firstName}, the message field cannot be empty</p>
        ) : (
          <p>
            Thank you, {firstName}, for submitting the form with the following
            message: {message}
          </p>
        )}
        <button onClick={handleReset}>Reset Form</button>
      </>
    );
  } else {
    content = (
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
            />
          </li>
          <button>Send contact form</button>
        </ul>
      </form>
    );
  }

  return (
    <section className={styles.container}>
      <h2>
        Contact Form from {firstName} {lastName}
      </h2>
      {content}
    </section>
  );
}
