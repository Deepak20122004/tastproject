import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <h1>Home</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <h1>Contact</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <h1>About</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
