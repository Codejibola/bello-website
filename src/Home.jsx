
import bello from "./BELLO.jpg"
import { Link } from "react-router-dom"
import "./Home.css"

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f6ff",
        color: "#1f2a44",
        padding: "2rem",
        fontFamily: "serif"
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center"
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem"
            }}
          >
            BELLO ABDULRAHMAN
          </h1>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              marginBottom: "1.5rem"
            }}
          >
            RETIRED ACCOUNTANT
          </h2>
        </div>

        {/* Content with image beside text */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          {/* Image */}
          <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <img
              src={bello}
              alt="Bello AbdulRahman smiling at his desk"
              style={{
                borderRadius: "0.75rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                width: "100%",
                maxWidth: "20rem"
              }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: "2" }}>
            <h3
              style={{
                fontSize: "70px",
                fontWeight: "600",
                marginBottom: "1rem"
              }}
            >
              Welcome
            </h3>
            <p
              style={{
                fontSize: "30px",
                lineHeight: "40px",
                marginBottom: "1.5rem"
              }}
            >
              I am Bello AbdulRahman, a retired accountant with over 30 years of experience in the
              field. Throughout my career, I've enjoyed helping clients navigate the complexities
              of accounting and tax planning. Please take a moment to explore my website and learn
              more about me.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem"
              }}
            >
              <Link
                to="/biography"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  backgroundColor: "#7b83eb",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "500"
                }}
              >
                Biography
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  backgroundColor: "#7b83eb",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "500"
                }}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


