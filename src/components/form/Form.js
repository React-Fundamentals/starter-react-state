import { useState } from "react";
import FormError from "./FormError";
export default function Form({
  // firstName = "",
  // lastName = "",
  // email = "",
  // message = "",
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
  //   setFormData((data) => {
  //     return {
  //       ...data,
  //       firstName: event.target.value,
  //     };
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData((data) => {
  //     return {
  //       ...data,
  //       lastName: event.target.value,
  //     };
  //   });
  // }

  function handleChange(event) {
    setFormData((data) => {
      return {
        ...data,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    // fetch call here to send data
  }

  function handleReset() {
    setFormData({ ...initialFormData });
    setIsSubmitted(false);
  }

  // Rendering logic
  let content;
  if (!isSubmitted) {
    content = (
      <form onSubmit={handleSubmit}>
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
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </li>
          <button>Send contact form</button>
        </ul>
      </form>
    );
  } else if (isSubmitted && formData.message.length === 0) {
    content = (
      <>
        <FormError firstName={formData.firstName} />
        <button onClick={handleReset}>Reset Form</button>
      </>
    );
  } else {
    content = (
      <>
        <p>
          Thank you, {formData.firstName}, for submitting the form with the
          following message: {formData.message}
        </p>
        <button onClick={handleReset}>Reset Form</button>
      </>
    );
  }

  return (
    <section>
      <h2>Contact Form from Hou Chia</h2>
      {content}
    </section>
  );
}
