import { version } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <h3>Example version {version}</h3>
    </>
  );
}

export default App;
