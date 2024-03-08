import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navBar";
import ContentCategory from "./components/contentCategory/contentCategory";
import ContentDetails from "./components/contentDetails/contentDetails";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/contentCategory/:genreName"
          element={<ContentCategory />}
        />
        <Route
          path="/contentDetails/:genreName/:id"
          element={<ContentDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
