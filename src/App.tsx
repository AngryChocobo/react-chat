import React from "react";
import logo from "./logo.svg";
// import { Button } from "antd";
import MyRouter from "./router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <Button type="primary">Button</Button> */}
      </header>
      <MyRouter />
    </div>
  );
}

export default App;
