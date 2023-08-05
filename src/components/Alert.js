import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    setShowAlert(true); // When new props.alert is received, show the alert again
  }, [props.alert]);

  const capitalizeFirstLetter = (word) => {
    let lower = word.toLocaleLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  //   const handleClick = () => {
  //     setShowAlert(false);
  //   };

  if (!props.alert || !showAlert) {
    return null;
  }

  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalizeFirstLetter(props.alert.type)}</strong>:{" "}
      {props.alert.msg}
    </div>
  );
}
