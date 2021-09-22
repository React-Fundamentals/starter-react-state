import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({
  initialFormData = {
    firstName: "Hou",
    lastName: "Chia",
    email: "",
    message: "",
  },
}) {
  const [formData, setFormData] = useState({});

  // function handleFirstNameChange(event) {
  //   setFormData((data) => ({ ...data, firstName: event.target.value }));
  // }

  // function handleLastNameChange(event) {
  //   setFormData((data) => ({ ...data, lastName: event.target.value }));
  // }

  function handleChange({ target: { name, value } }) {
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <section className={styles.container}>
      <h2>
        Contact Form from {initialFormData.firstName} {initialFormData.lastName}
      </h2>

      <form>
        <ul>
          <li>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </li>
          <li>
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" name="message" />
          </li>
          <button>Send contact form</button>
        </ul>
      </form>
    </section>
  );
}
