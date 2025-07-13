import React from "react";
import bello from "./BELLO.jpg"
import {Link} from "react-router-dom"

export default function Biography() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f6f8ff, #eaeaff)",
        padding: "4rem 1rem",
        fontFamily: "'Georgia', serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "1.5rem",
          padding: "3rem",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid #e0e0f0"
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src={bello}
            alt="Bello AbdulRahman"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              marginBottom: "1rem"
            }}
          />
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2a44", marginBottom: "0.25rem" }}>
            Bello AbdulRahman
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#5a5a5a" }}>A Life of Purpose and Precision</p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #ccc", marginBottom: "2rem" }} />

        {/* Quote */}
        <blockquote
          style={{
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "#444",
            background: "#f3f4f9",
            padding: "1rem 1.5rem",
            borderLeft: "4px solid #7b83eb",
            marginBottom: "2rem",
            borderRadius: "0.75rem"
          }}
        >
          “Integrity is doing the right thing even when no one is watching.”
        </blockquote>

        {/* Body */}
        <div
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.85rem",
            color: "#2d2d2d",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
          }}
        >
          <p>
            Born and raised in the heart of Nigeria, Bello AbdulRahman grew up in a family that deeply valued honesty, education, and service. His early fascination with numbers and problem-solving led him to pursue a degree in Accounting, where he quickly rose to academic excellence.
          </p>
          <p>
            Throughout his illustrious 30+ year career, Bello worked in diverse sectors—from corporate finance to public service—earning a stellar reputation for his integrity, attention to detail, and unwavering commitment to transparency.
          </p>
          <p>
            As a mentor and leader, he helped shape the paths of many young professionals, offering not only knowledge but wisdom rooted in experience. His contributions have left a legacy in every institution he served.
          </p>
          <p>
            Now retired, Bello continues to inspire through his writing, consulting, and community involvement. Whether guiding future accountants or speaking at public forums, his impact remains timeless.
          </p>
          <p>
            When he’s not immersed in numbers or mentoring, you’ll find Bello enjoying books, reflecting on life, or spending time with family — the true treasures of his journey.
          </p>
  <div style={{ textAlign: "center", marginTop: "2rem", gap: "1rem", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
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
  <Link
    to="/gallery"
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
    Gallery
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
