import React from "react";
import "./App.css";

function App() {

  const handleClick = (buttonName) => {
    alert(`${buttonName} clicked`);
  };

  return (
    <div className="container">
      <h1>My React Buttons</h1>

      <div className="btn-group">
        <button onClick={() => handleClick("freememory")}>freememory</button>
        <button onClick={() => handleClick("totalmemory")}>totalmemory</button>
        <button onClick={() => handleClick("cpu arch")}>cpu arch</button>
        <button onClick={() => handleClick("user info")}>user info</button>
      </div>
    </div>
  );
}

export default App;