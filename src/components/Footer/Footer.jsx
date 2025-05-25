import { Link, NavLink } from "react-router-dom";
import navLogo from '../../assets/images/header/logo.png';

// social lists
import {
  RiFacebookFill,
  RiInstagramLine,
  RiDribbbleLine,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

const socialLists = [
  {
    id: 1,
    name: "Facebook",
    icon: <RiFacebookFill />,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <RiInstagramLine />,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    name: "Dribbble",
    icon: <RiDribbbleLine />,
    url: "https://www.dribbble.com",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <RiLinkedinFill />,
    url: "https://www.linkedin.com",
  },
  {
    id: 5,
    name: "Twitter",
    icon: <RiTwitterFill />,
    url: "https://www.twitter.com",
  },
];

const Footer = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      alert("Thank you! We will contact you soon.");
    } else {
      form.reportValidity();
    }
  };

  return (
    <footer id="footer" className="py-20 pb-10 font-redHatDisplay bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div>
            <Link to="/" className="flex items-center gap-0">
              <div className="w-8 h-8">
                <img src={navLogo} alt="Logo" className="w-8 h-8 object-cover" />
              </div>
              <span className="text-2xl font-clashDisplay font-semibold text-white">orkly</span>
            </Link>
            <p className="mt-5 text-gray-300">
              Great platform for job seekers. Find your dream job easily.
            </p>
          </div>

          {/* Middle Section (Help & Support) */}
          <div className="ml-12">
            <h3 className="text-lg font-semibold text-blue-50">Help & Support</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><NavLink to="/help" className="hover:text-primaryColor">FAQ</NavLink></li>
              <li><NavLink to="/help" className="hover:text-primaryColor">Support</NavLink></li>
              <li><NavLink to="/about" className="hover:text-primaryColor">About Us</NavLink></li>
            </ul>
          </div>

          {/* Right Section (Contact Us) */}
          <div>
            <h3 className="text-lg font-semibold text-blue-50">Contact Us</h3>
            <p className="mt-4 text-gray-300">Contact us for any help at +91123456789</p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  className="w-full p-4 bg-blue-50 text-gray-800 rounded-sm"
                  placeholder="Write to us"
                  required
                />
                <button
                  type="submit"
                  className="py-3 px-6 bg-primaryColor w-32 h-14 text-white rounded-sm hover:bg-primaryColor/80"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 mt-10 border-t border-gray-600">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} WorkLy. All rights reserved.
          </p>
          <ul className="flex items-center gap-3 mt-4 sm:mt-0">
            {socialLists.map((social) => (
              <li key={social.id}>
                <Link
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primaryColor"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
