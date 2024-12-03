import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/contact" />
        <Route path="/contact" />
        <Route path="/contact" />
        <Route path="/contact" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
