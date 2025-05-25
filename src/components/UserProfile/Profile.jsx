import { FaUserEdit, FaCloudUploadAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaSuitcase, FaRegFileAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/images/Profile/profile.png";
const Profile = () => {
  return (
    <div className="min-h-screen h-full flex items-start justify-center bg-[#F8F8FD] dark:bg-gray-900 px-6 py-10 md:px-16 font-redHatDisplay transition-all duration-300">

    <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <img
              src={img}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-none"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white font-clashDisplay">
                Hemant Singh
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Frontend Developer | React.js Enthusiast</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-[#7110c6] text-white px-5 py-2 rounded-md hover:shadow-lg hover:shadow-[#b084ff33] transition-all duration-300">
            <FaUserEdit /> Edit Profile
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f4f2fa] dark:bg-gray-700 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white font-clashDisplay">Contact Info</h3>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <FaEnvelope /> hs@gmail.com
            </p>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <FaPhone /> +91 1223456789
            </p>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <FaMapMarkerAlt /> Lucknow, India
            </p>
          </div>

          {/* Resume Upload */}
          <div className="bg-[#f4f2fa] dark:bg-gray-700 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white font-clashDisplay">Resume</h3>
            <p className="text-gray-600 dark:text-gray-300">Uploaded: resume.pdf</p>
            <button className="mt-2 flex items-center gap-2 px-4 py-2 text-sm bg-[#7110c6] text-white rounded-md hover:shadow-md hover:shadow-[#b084ff44] transition-all duration-300">
              <FaCloudUploadAlt /> Upload New Resume
            </button>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 font-clashDisplay dark:text-white">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Tailwind CSS", "JavaScript", "Git", "Responsive Design"].map((skill, idx) => (
              <span key={idx} className="px-3 py-1 rounded-md bg-[#7110c6]/10 text-[#7110c6] dark:bg-[#b084ff22] dark:text-[#b084ff] text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 font-clashDisplay dark:text-white flex items-center gap-2">
            <FaGraduationCap /> Education
          </h3>
          <div className="bg-[#f4f2fa] dark:bg-gray-700 p-4 rounded-xl shadow-sm">
            <p className="text-gray-800 dark:text-white font-medium">MCA – Integral University</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2023 - 2025 | 8.5 CGPA</p>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 font-clashDisplay dark:text-white flex items-center gap-2">
            <FaSuitcase /> Work Experience
          </h3>
          <div className="bg-[#f4f2fa] dark:bg-gray-700 p-4 rounded-xl shadow-sm">
            <p className="text-gray-800 dark:text-white font-medium">Frontend Intern – Technivorus</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Dec 2024 – Mar 2025</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Designed educational platform UI using React & Tailwind, created responsive layouts, and implemented dashboards for users.
            </p>
          </div>
        </div>

        {/* Job Preferences */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 font-clashDisplay dark:text-white flex items-center gap-2">
            <FaRegFileAlt /> Job Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f4f2fa] dark:bg-gray-700 p-4 rounded-xl shadow-sm">
            <p className="text-gray-800 dark:text-white"><strong>Preferred Role:</strong> Frontend Developer</p>
            <p className="text-gray-800 dark:text-white"><strong>Location:</strong> Lucknow</p>
            <p className="text-gray-800 dark:text-white"><strong>Availability:</strong> Immediate</p>
            <p className="text-gray-800 dark:text-white"><strong>Job Type:</strong> Full-Time</p>
          </div>
        </div>

        {/* Back to Dashboard Button */}
        <div className="pt-6">
          <Link
            to="/dashboard"
            className="inline-block px-6 py-2 text-white bg-[#7110c6] rounded-md hover:shadow-md hover:shadow-[#b084ff33] transition-all duration-300"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
