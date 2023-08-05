import React from "react";
import TextComparison from "./TextComparison";

export default function Services(props) {
  return (
    <div>
      <TextComparison mode={props.mode} showAlert={props.showAlert} />
    </div>
  );
}
