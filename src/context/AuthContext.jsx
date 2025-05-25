import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


// Create context
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
  try {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect based on user role
    const role = userData?.role?.toLowerCase();

    if (role === "jobseeker") {
      navigate("/dashboard");
    } else if (role === "employer") {
      navigate("/employerdashboard");
    } else {
      navigate("/"); // fallback
    }

  } catch (error) {
    console.error("Login failed: ", error);
  }
};


  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
