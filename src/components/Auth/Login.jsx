import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import navLogo from '../../assets/images/header/logo.png';
import download from "../../assets/images/gifs/download.gif";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("jobseeker");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

 
const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please enter all fields.");
    return;
  }

  setLoading(true);

  try {
    const userData = {
      email,
      token: "fake-jwt-token",
     role: userType,  
    };

    login(userData);  

    toast.success("Logged in successfully!");

  

  } catch (error) {
    toast.error("Login failed. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 dark:text-white font-sans">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center mb-16">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-6 md:px-12 py-10">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center gap-0 cursor-pointer">
              <div className="w-8 h-8">
                <img
                  src={navLogo}
                  loading="lazy"
                  alt="Logo"
                  className="w-8 h-8 object-cover m-0 p-0"
                />
              </div>
              <span className="font-clashDisplay font-semibold text-2xl leading-9 tracking-[-0.01em]">
                orkly
              </span>
            </Link>
          </div>

          <h2 className="text-2xl font-semibold font-clashDisplay text-gray-800 dark:text-white mb-2">Log In</h2>
          <p className="text-sm dark:text-white text-gray-600 mb-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Account Type*</label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white appearance-none"
              >
                <option value="jobseeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                {userType === "jobseeker"
                  ? "As a Job Seeker, you can browse job listings and apply for jobs."
                  : "As an Employer, you can post jobs and review job applications."}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm dark:text-white font-medium text-gray-700 mb-1">Email address*</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium dark:text-white text-gray-700 mb-1">Password*</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>

            <p className="text-sm dark:text-white text-gray-600 mb-6">
              Forgot your password?{' '}
              <Link to="/resetpass" className="text-indigo-600 hover:underline">
                Reset
              </Link>
            </p>

            <button
              type="submit"
              className={`w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition ${loading ? "bg-gray-400" : ""}`}
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>

          </form>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center">
          <img
            src={download}
            alt="Sign in illustration"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </div>
  );
};

export default LogIn;
