import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const Login = () => {
  const Navigate = useNavigate();
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

    try {
      const url =
        state === "Sign Up"
          ? "http://localhost:4000/api/user/register"
          : "http://localhost:4000/api/user/login";

      const { data } = await axios.post(url, formData);

      if (data.success) {
        alert(data.message);
        Navigate("/");
        console.log("rigiser");
        // form reset
        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // register ke baad login pe switch
        if (state === "Sign Up") {
          setState("Login");
          Navigate("/");
          console.log("login");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  //   const handleLogout = async () => {
  //     try {
  //       const { data } = await axios.post(
  //         "http://localhost:4000/api/user/logout",
  //       );
  //       alert(data.message);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-[350px]">
        {/* Heading */}
        <h2 className="text-center text-xl font-semibold mb-6">
          {state === "Sign Up" ? "Register" : "Login"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          {state === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {state === "Sign Up" ? "REGISTER" : "LOGIN"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {state === "Sign Up" ? (
            <>
              ALREADY HAVE AN ACCOUNT?
              <span
                onClick={() => setState("Login")}
                className="text-blue-600 cursor-pointer hover:underline ml-1"
              >
                LOGIN
              </span>
            </>
          ) : (
            <>
              DON'T HAVE AN ACCOUNT?
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-600 cursor-pointer hover:underline ml-1"
              >
                SIGN UP
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
