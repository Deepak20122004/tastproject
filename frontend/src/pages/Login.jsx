import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [state, setState] = useState("Sign Up");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res;

    if (state === "Sign Up") {
      res = await register(formData.name, formData.email, formData.password);
    } else {
      res = await login(formData.email, formData.password);
    }

    if (res.success) {
      alert(res.message);
      navigate("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-[350px]">
        <h2 className="text-center text-xl font-semibold mb-6">
          {state === "Sign Up" ? "Register" : "Login"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {state === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2"
            required
          />

          <button className="w-full bg-blue-600 text-white py-2">
            {state === "Sign Up" ? "REGISTER" : "LOGIN"}
          </button>
        </form>

        <p className="text-center mt-4">
          {state === "Sign Up" ? (
            <>
              Already have account?
              <span
                onClick={() => setState("Login")}
                className="cursor-pointer text-blue-600 ml-1"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have account?
              <span
                onClick={() => setState("Sign Up")}
                className="cursor-pointer text-blue-600 ml-1"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
