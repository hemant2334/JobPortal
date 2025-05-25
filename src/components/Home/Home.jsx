import { useState, useRef, useEffect } from "react";
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import download2 from "../../assets/images/gifs/download2.gif";
import { useAuth } from "../../context/AuthContext";

const popularLists = ["UI Designer", "UX Researcher", "Android", "Admin"];

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("India, Delhi");
  const dropdownRef = useRef(null);

  const { user } = useAuth();

  const locations = [
    "Mumbai, Maharashtra",
    "Bangalore, Karnataka",
    "Noida, UttarPradesh",
    "Lucknow, UttarPradesh",
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 pt-16 py-10 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left */}
          <div className="pt-10 ml-7">
            <h1 className="text-4xl lg:text-6xl font-clashDisplay font-semibold text-gray-800 dark:text-white mb-6">
              Thousands of Job, <span className="text-[#7110c6] dark:text-purple-400">One Platform</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              One Platform. Endless Career Possibilities
            </p>

            {/* Search Bar */}
            <div className="relative bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg max-w-full lg:max-w-3xl">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Job Title Input */}
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 w-full bg-white dark:bg-gray-700">
                  <RiSearchLine className="text-gray-400 dark:text-gray-300 mr-2" />
                  <input
                    type="text"
                    placeholder="Job title"
                    className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
                  />
                </div>

                {/* Location Dropdown */}
                <div className="relative w-full" ref={dropdownRef}>
                  <div
                    className={`flex items-center border ${isDropdownOpen ? "border-[#7110c6]" : "border-gray-300 dark:border-gray-600"
                      } rounded-md px-4 py-2 cursor-pointer bg-white dark:bg-gray-700`}
                    onClick={toggleDropdown}
                  >
                    <SlLocationPin
                      className={`mr-2 ${isDropdownOpen ? "text-blue-600" : "text-gray-400 dark:text-gray-300"}`}
                    />
                    <input
                      readOnly
                      value={selectedLocation}
                      className="w-full outline-none cursor-pointer bg-transparent text-gray-800 dark:text-white pointer-events-none"
                    />
                    <RiArrowDownSLine
                      className={`ml-2 transition-transform ${isDropdownOpen ? "rotate-180 text-blue-600" : "text-gray-400 dark:text-gray-300"
                        }`}
                    />
                  </div>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <ul className="absolute bg-white dark:bg-gray-700 mt-2 w-full shadow-md rounded-md z-10">
                      {locations.map((loc) => (
                        <li
                          key={loc}
                          className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-600 cursor-pointer text-gray-800 dark:text-white"
                          onClick={() => handleLocationSelect(loc)}
                        >
                          {loc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Search Button */}
                <Link to={user ? "/jobs" : "/login"} className="w-full">
                  <button className="bg-[#7110c6] text-white px-6 py-2 h-full w-full rounded-md hover:bg-blue-600 transition">
                    Search my job
                  </button>
                </Link>
              </div>
            </div>

            {/* Popular Tags */}
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Popular:
              {popularLists.map((list) => (
                <span
                  key={list}
                  className="ml-2 inline-block px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 hover:cursor-pointer rounded text-gray-600 dark:text-gray-300 hover:bg-[#7110c6] hover:text-white mt-2"
                >
                  {list}
                </span>
              ))}
            </p>
          </div>

          {/* Right */}
          <div className="relative text-center">
            <img
              src={download2}
              alt="Hero"
              className="mx-auto w-[300px] xl:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
