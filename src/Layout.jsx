import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Theme/Loader";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true); // for loader

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // Dark mode toggle
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
   
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition duration-300">
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
