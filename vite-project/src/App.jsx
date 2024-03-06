import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
