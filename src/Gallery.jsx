import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() { 

    return (
    <div stlye={{display: "flex",flexWrap:"wrap" ,justifyContent: "center", marginTop: "2rem"}}>

      
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
    </div>
    </div>
    )
}