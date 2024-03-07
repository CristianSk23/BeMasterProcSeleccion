import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navBar";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
