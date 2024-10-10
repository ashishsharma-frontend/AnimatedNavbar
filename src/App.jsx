import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
