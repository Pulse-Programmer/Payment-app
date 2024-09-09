import "./App.css";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="">
      {isLoggedIn ? <Navbar /> : <Navigate to="/login" />}
      <Outlet context={setIsLoggedIn} />
    </div>
  );
}

export default App;
