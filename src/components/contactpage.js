import React, { useState } from "react";
import "./contactpage.css"; // Import the external CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("Message sent successfully!"); // Show the success alert
        setFormData({
          name: "",
          email: "",
          message: "",
        }); // Clear the form after submission
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log("Error sending email: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
