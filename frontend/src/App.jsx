import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
