import { useState } from "react";
import { IoBriefcaseSharp, IoPersonSharp, IoDocumentTextSharp, IoLogOutSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import navLogo from "../../assets/images/header/logo.png";
import { useAuth } from "../../context/AuthContext";

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { logout } = useAuth();

  const menuItems = [
    { name: "Dashboard", icon: <IoBriefcaseSharp />, tab: "home" },
    { name: "Post Job", icon: <IoDocumentTextSharp />, tab: "post-job" },
    { name: "Manage Jobs", icon: <IoBriefcaseSharp />, tab: "manage-jobs" },
    { name: "Applicants", icon: <IoPersonSharp />, tab: "applicants" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F8FD] dark:bg-gray-900 transition-all duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 p-6 border-r dark:border-gray-700">
        <div>
          <Link to="/" className="flex items-center gap-0 mb-8">
            <img src={navLogo} alt="Logo" className="w-8 h-8 object-cover" />
            <span className="font-clashDisplay font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primaryColor dark:text-white dark:to-primaryColor">
              orkly
            </span>
          </Link>
        </div>
        <ul className="space-y-4 font-redHatDisplay">
          {menuItems.map((item) => (
            <li key={item.tab}>
              <button
                onClick={() => setActiveTab(item.tab)}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === item.tab
                    ? "bg-[#7110c6] text-white scale-105 translate-x-2 shadow-lg shadow-[#b084ff44]"
                    : "text-gray-700 dark:text-gray-300 hover:bg-[#7110c6]/10 hover:translate-x-2 hover:scale-105 hover:shadow-md hover:shadow-[#b084ff33]"
                }`}
              >
                {item.icon} {item.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={logout}
              className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-red-600 hover:bg-red-100 dark:hover:bg-red-900 transition-all duration-300 hover:translate-x-2 hover:scale-105"
            >
              <IoLogOutSharp /> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 font-redHatDisplay">
        {/* Dashboard Home */}
        {activeTab === "home" && (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white font-clashDisplay">
              Welcome Back! 👋
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-xl bg-[#7110c6] text-white transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl hover:shadow-[#b084ff44] cursor-pointer">
                <h3 className="text-2xl font-bold mb-2">5</h3>
                <p className="text-white/90">Jobs Posted</p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-xl bg-[#7110c6] text-white transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl hover:shadow-[#b084ff44] cursor-pointer">
                <h3 className="text-2xl font-bold mb-2">24</h3>
                <p className="text-white/90">Applications Received</p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-xl bg-[#7110c6] text-white transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl hover:shadow-[#b084ff44] cursor-pointer">
                <h3 className="text-2xl font-bold mb-2">2</h3>
                <p className="text-white/90">Jobs Closed</p>
              </div>
            </div>
          </div>
        )}

        {/* Post Job */}
        {activeTab === "post-job" && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white font-clashDisplay">
              Post a New Job
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Job Title"
                className="w-full px-4 py-3 border rounded-xl bg-[#F8F8FD] dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7110c6] transition"
              />
              <textarea
                placeholder="Job Description"
                rows="4"
                className="w-full px-4 py-3 border rounded-xl bg-[#F8F8FD] dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7110c6] transition"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 border rounded-xl bg-[#F8F8FD] dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7110c6] transition"
              />
              <input
                type="text"
                placeholder="Salary Range"
                className="w-full px-4 py-3 border rounded-xl bg-[#F8F8FD] dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7110c6] transition"
              />
              <button
                type="submit"
                className="bg-[#7110c6] hover:bg-[#5a0ea1] text-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:scale-105 hover:translate-y-1"
              >
                Post Job
              </button>
            </form>
          </div>
        )}

        {/* Manage Jobs */}
        {activeTab === "manage-jobs" && (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white font-clashDisplay">
              Manage Posted Jobs
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                <thead className="bg-[#7110c6] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Title</th>
                    <th className="py-3 px-4 text-left">Location</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700 hover:bg-[#7110c6]/10 transition">
                    <td className="py-4 px-4">Frontend Developer</td>
                    <td className="py-4 px-4">Remote</td>
                    <td className="py-4 px-4">Open</td>
                    <td className="py-4 px-4">
                      <button className="text-primaryColor font-semibold hover:underline">Edit</button>
                    </td>
                  </tr>
                  {/* More rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Applicants */}
        {activeTab === "applicants" && (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white font-clashDisplay">
              Applicants
            </h2>
            <div className="text-gray-700 dark:text-gray-300">
              No applicants yet.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerDashboard;
