import React from "react";
// import "../styles/style-title.css";

export default function Title({ name, title }) {
  return (
    <div className="mx-auto my-3 text-center text-title">
      <h1 className="font-weight-bold text-capitalize font-italic">
        {name} <strong className="title">{title}</strong>
      </h1>
    </div>
  );
}
