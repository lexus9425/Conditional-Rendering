import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function renderConiditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConiditionally()}</div>;
}

export default App;
