import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

axios.defaults.withCredentials = true;

export const AuthProvider = ({ children }) => {
  const backendUrl = "http://localhost:4000";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ LOGIN
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/login`,
        { email, password }
      );

      if (data.success) {
        setIsLoggedIn(true);
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  // ✅ REGISTER
  const register = async (name, email, password) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/register`,
        { name, email, password }
      );

      if (data.success) {
        setIsLoggedIn(true);
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Register failed",
      };
    }
  };

  // ✅ LOGOUT
  const logout = async () => {
    try {
      await axios.post(`${backendUrl}/api/user/logout`);
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Auto login (refresh fix)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get(
          `${backendUrl}/api/userreq.accepts(types);`
        );
        if (data.success) {
          setIsLoggedIn(true);
        }
      } catch {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Hook
export const useAuth = () => useContext(AuthContext);