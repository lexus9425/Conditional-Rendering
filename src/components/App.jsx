import React from "react";

var isLoggedIn = false;

function renderConiditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

function App() {
  return <div className="container">{renderConiditionally()}</div>;
}

export default App;
