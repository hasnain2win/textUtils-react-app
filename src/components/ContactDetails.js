import React from "react";
import "./ContactDetails.css"; // Import the CSS file for styling

export default function ContactDetails(props) {
  const name = "Md Hasnain";
  const email = "hassu@gmail.com";
  const phone = "+1 (555) 123-4567";
  const address = "123 Main Street, Anytown, USA";

  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#080e23" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <div
        className="contact-container"
        style={{
          backgroundColor: props.mode === "dark" ? "#080e23" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Contact Details
        </h2>
        <div className="contact-item">
          <span
            className="contact-label"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Name:
          </span>
          <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {name}
          </span>
        </div>
        <div className="contact-item">
          <span
            className="contact-label"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Email:
          </span>
          <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {email}
          </span>
        </div>
        <div className="contact-item">
          <span
            className="contact-label"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Phone:
          </span>
          <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {phone}
          </span>
        </div>
        <div className="contact-item">
          <span
            className="contact-label"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Address:
          </span>
          <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {address}
          </span>
        </div>
      </div>
    </div>
  );
}
