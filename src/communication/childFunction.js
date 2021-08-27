import React from "react";

export default function ChildFunction(props) {
  const { username, age } = props;
  return (
    <div>
      <h3>ChildFunction</h3>
      <p>
        Username: {username} - Age: {age}
      </p>
    </div>
  );
}
