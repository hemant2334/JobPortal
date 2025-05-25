import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import navLogo from "../../assets/images/header/logo.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import { useAuth } from "../../context/AuthContext";

const Header = ({ toggleTheme, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

 const dashboardLink =
  user?.role?.toLowerCase() === 'jobseeker'
    ? '/dashboard'
    : user?.role?.toLowerCase() === 'employer'
    ? '/employerdashboard'
    : '/dashboard'; 


  return (
    <header className="w-full bg-[#F8F8FD] dark:bg-gray-900 dark:text-white top-0 left-0 z-50 transition duration-300">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo and Links */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-0 cursor-pointer">
            <div className="w-8 h-8">
              <img src={navLogo} alt="W" className="w-8 h-8 object-cover" />
            </div>
            <span className="font-clashDisplay font-semibold text-2xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primaryColor">
              orkly
            </span>
          </Link>

          <ul className="hidden md:flex gap-x-6">
            <li><NavLink to="/" className="nav-link dark:text-white">Home</NavLink></li>
            <li><Link to="/about" className="nav-link dark:text-white">About</Link></li>
            <li><Link to="/jobs" className="nav-link dark:text-white">Jobs</Link></li>
            <li><Link to="/help" className="nav-link dark:text-white">Help</Link></li>
            <li><HashLink smooth to="#footer" className="nav-link dark:text-white">Contact</HashLink></li>
          </ul>
        </div>

        {/* Right-side buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#eee] dark:bg-[#333] text-[#7110c6] dark:text-white"
            title="Toggle Theme"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>

          {/* Auth Buttons */}
          {!user ? (
            <>
              <Link to="/login">
                <button className="text-[#7110c6] dark:text-white font-semibold px-4 py-[10px] rounded-md hover:bg-primaryColor/10">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="primary-btn bg-[#7110c6] text-white dark:bg-[#7110c6] dark:text-white">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <Link to={dashboardLink}>
              <button className="bg-[#7110c6] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                Dashboard
              </button>
            </Link>
          )}
        </div>

        {/* Hamburger Menu for mobile */}
        <button
          className="md:hidden w-10 h-10 bg-[#5533ff13] rounded-lg border shadow-inner flex items-center justify-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoClose size={20} /> : <IoMenuSharp size={20} />}
        </button>
      </nav>
    </header>
  );
};


export default Header;
