import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleCleanText = () => {
    const cleanedText = text.replace(/[^a-zA-Z\s]/g, "");
    setText(cleanedText);
  };

  const getFileName = () => {
    let d = new Date();
    let dformat = `${d.getDate()}_${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    console.log("getCurrentDate : ", dformat);
    return "Codefider" + dformat + ".txt";
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase successfully", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase successfully", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared! successfully", "success");
  };

  const capitalizeFirstLetter = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  };
  const downloadTxtFile = () => {
    if (text.length >= 2) {
      const element = document.createElement("a");
      const file = new Blob([document.getElementById("myBox").value], {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = getFileName();
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
      props.showAlert("Text file downloaded successfully", "success");
    }
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed successfully", "success");
  };

  const handleOnChange = (event) => {
    console.log("onChange method clicked");
    setText(event.target.value);
  };

  const encodeText = () => {
    let encodedText = encodeURIComponent(text);
    setText(encodedText);
  };
  const deCodeText = () => {
    let decodedText = decodeURIComponent(text);
    setText(decodedText);
  };

  return (
    <>
      <div className="container">
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2 className="mb-3">{props.heading}</h2>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#080e23" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-success mx-1 my-1 "
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          ToUpperCase
        </button>
        <button
          className="btn btn-success mx-1  my-1"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          ToLowerCase
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleExtraSpace}
        >
          RemoveExtraSpace
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleCleanText}
        >
          CleanText
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          disabled={text.length === 0}
          onClick={encodeText}
        >
          EncodeText
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          disabled={text.length === 0}
          onClick={deCodeText}
        >
          DecodeText
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleClearText}
        >
          ClearText
        </button>
        <button
          className="btn btn-success mx-1"
          disabled={text.length === 0}
          onClick={downloadTxtFile}
        >
          DownloadFile
        </button>
        <button
          className="btn btn-success mx-1"
          disabled={text.length === 0}
          onClick={() => {
            navigator.clipboard.writeText(text);
            props.showAlert("copied to clipboard", "success");
          }}
        >
          {" "}
          CopyClipboard
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          Total Words :{" "}
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
        </p>
        <p>
          Total Characters: <b>{text.length}</b>
        </p>
        <p>
          Time to read:{" "}
          <b>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}
            -minutes{" "}
          </b>
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
