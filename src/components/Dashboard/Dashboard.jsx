import { Link } from "react-router-dom";
import navLogo from "../../assets/images/header/logo.png";
import { useAuth } from "../../context/AuthContext";
import { FaUser, FaBriefcase, FaSearch } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const { user, logout } = useAuth();

  const jobViewsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Job Views",
        data: [50, 60, 40, 70, 20, 10, 50, 56, 23, 86, 98, 50],
        backgroundColor: "#7110c6",
      },
      {
        label: "Job Applied",
        data: [10, 20, 5, 20, 14, 8, 25, 10, 10, 15, 23, 14],
        backgroundColor: "#9b4dff",
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-all duration-300 font-redHatDisplay">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 border-r dark:border-gray-700">
        <div>
          <Link to="/" className="flex items-center gap-0 mb-8">
            <img src={navLogo} alt="Logo" className="w-8 h-8 object-cover" />
            <span className="font-clashDisplay font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primaryColor dark:text-white dark:to-primaryColor">
              orkly
            </span>
          </Link>
        </div>

        <ul className="space-y-4 font-redHatDisplay">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-[#7110c6]/10 hover:translate-x-2 hover:scale-105 hover:shadow-md hover:shadow-[#b084ff33] transition-all duration-300"
            >
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <Link
              to="/jobs"
              className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-[#7110c6]/10 hover:translate-x-2 hover:scale-105 hover:shadow-md hover:shadow-[#b084ff33] transition-all duration-300"
            >
              <FaBriefcase /> Jobs
            </Link>
          </li>
          
          <li>
            <button
              onClick={logout}
              className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-red-600 hover:bg-red-100 dark:hover:bg-red-900 transition-all duration-300 hover:translate-x-2 hover:scale-105"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 font-redHatDisplay">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white font-clashDisplay">
          Welcome Back! 👋
        </h2>

          {/* Search Bar Section */}
        <div className="mb-8">
          <label htmlFor="job-search" className="sr-only">
            Search for Jobs
          </label>
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              id="job-search"
              placeholder="Search for jobs, companies or keywords..."
              className="w-full px-5 py-3 pr-12 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7110c6] transition-all duration-300"
            />
            <span className="absolute right-4 top-3 text-gray-400 dark:text-gray-500">
              <FaSearch size={20} />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="p-6 rounded-xl bg-[#7110c6] text-white transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl hover:shadow-[#b084ff44] cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">4</h3>
            <p className="text-white/90">Upcoming Interviews</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl bg-[#7110c6] text-white transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl hover:shadow-[#b084ff44] cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">320</h3>
            <p className="text-white/90">Total Applications</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl bg-[#7110c6] text-white transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl hover:shadow-[#b084ff44] cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">24</h3>
            <p className="text-white/90">Applied Jobs</p>
          </div>
        </div>


        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white font-clashDisplay">
            Monthly Overview
          </h3>
          <Bar data={jobViewsData} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
