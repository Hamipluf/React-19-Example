import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/user.jsx";
import App from "./App.jsx";
import "./index.css";

// Router
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);
