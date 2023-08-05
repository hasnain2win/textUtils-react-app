import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import ContactDetails from "./ContactDetails";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#080e23" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        About us
      </h1>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <Button
              className="accordion-button"
              type="button"
              style={{
                backgroundColor: props.mode === "dark" ? "#080e23" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>vision and mission</strong>
            </Button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#080e23" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>
                Text Utility application is designed to provide a range of
                helpful features for manipulating and managing text. It may
                include functionalities like text formatting, character/word
                count, search and replace, text case conversion, URL
                encoding/decoding, and more. Users can leverage these tools to
                streamline their text-related tasks and improve productivity
              </strong>
            </div>
          </div>
        </div>
      </div>
      <br />
      <ContactDetails mode={props.mode} />
    </div>
  );
}
