import React from "react";

 function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        color: "#1f2a44",
        padding: "2rem",
        fontFamily: "serif"
      }}
    >
      <div
        style={{
          maxWidth: "70rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              marginBottom: "0.5rem"
            }}
          >
            About Bello AbdulRahman
          </h1>
          <p style={{ fontSize: "1.125rem", maxWidth: "45rem", margin: "0 auto" }}>
            A deeper look into the life and journey of a dedicated accountant.
          </p>
        </div>

        <div
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
          }}
        >
          <p>
            Bello AbdulRahman is a seasoned accountant with over three decades of experience in
            financial management, taxation, and corporate consultancy. He has worked with various
            organizations, helping them streamline their financial operations and stay compliant
            with regulatory standards.
          </p>
          <p>
            Over the years, Bello earned a reputation for integrity, precision, and dedication to
            professional excellence. His leadership and mentorship have impacted many young
            professionals in the accounting industry.
          </p>
          <p>
            Now retired, Bello spends his time reflecting on his journey, sharing knowledge, and
            staying connected with the financial world through speaking engagements and private
            consultancy work.
          </p>
        </div>
      </div>
    </div>
  );
} 

export default About;