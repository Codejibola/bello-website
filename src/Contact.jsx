import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for reaching out.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #eef2ff, #f9faff)",
        padding: "4rem 1rem",
        fontFamily: "'Georgia', serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "#ffffff",
          padding: "3rem",
          borderRadius: "1.5rem",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e4e4e7"
        }}
      >
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
            color: "#1f2a44"
          }}
        >
          Contact Me
        </h1>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "2rem" }}>
          Have a question, comment, or just want to say hello? Fill the form below.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="7"
            required
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid #ccc",
              fontSize: "1rem",
              resize: "vertical"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "0.75rem 1rem",
              backgroundColor: "#1f2a44",
              color: "#fff",
              border: "none",
              borderRadius: "0.75rem",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.3s ease"
            }}
          >
            Send Message
          </button>
        </form>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
  <Link
    to="/"
    style={{
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#7b83eb",
      padding: "0.75rem 1.5rem",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      transition: "background-color 0.3s, transform 0.2s"
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = "#5f6bdc";
      e.currentTarget.style.transform = "scale(1.05)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = "#7b83eb";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    Home
  </Link>
</div>

      </div>
    </div>
  );
}

