import { useState } from "react";

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

  return (
    <section>
      <h2>Contact Form from Hou Chia</h2>
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
