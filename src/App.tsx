import React from "react";
// import logo from "./logo.svg";
// import { Button } from "antd";
import RouterView from "./router";
import "./App.css";
import { SnackbarProvider, useSnackbar } from "notistack";
import "./api/user";

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <div className="App">
        <RouterView />
      </div>
    </SnackbarProvider>
  );
}

export default App;
