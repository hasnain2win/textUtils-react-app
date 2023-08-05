import React, { useState } from "react";
import { diffWords, Diff } from "diff";

export default function TextComparison(props) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [differences, setDifferences] = useState([]);

  const handleText1Change = (event) => {
    setText1(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
  };

  const compareTexts = () => {
    const diffResult = diffWords(text1, text2);
    setDifferences(diffResult);
    props.showAlert("Text compared successfully", "success");
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>Textutils - Text Comparison</h1>
      <div
        style={{
          backgroundColor: props.mode === "dark" ? "#080e23" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <textarea
          rows="8"
          cols="82"
          value={text1}
          onChange={handleText1Change}
          placeholder="Enter text 1 here..."
          style={{
            backgroundColor: props.mode === "dark" ? "#080e23" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
        <textarea
          rows="8"
          cols="82"
          value={text2}
          onChange={handleText2Change}
          placeholder="Enter text 2 here..."
          style={{
            backgroundColor: props.mode === "dark" ? "#080e23" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
      </div>
      <button className="btn btn-success" onClick={compareTexts}>
        Compare Texts
      </button>
      <div>
        <h2>Differences:</h2>
        {differences.map((part, index) => (
          <span
            key={index}
            style={{
              color: part.added ? "green" : part.removed ? "red" : "inherit",
              backgroundColor: part.added
                ? "#cfc"
                : part.removed
                ? "#fcc"
                : "inherit",
            }}
          >
            {part.value}
          </span>
        ))}
      </div>
    </div>
  );
}
