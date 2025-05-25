import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/images/header/logo.png';
import download1 from '../../assets/images/gifs/download1.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const { role, email, password, confirmPassword, termsAgreed } = formData;

    if (!role || !email || !password || !confirmPassword) {
      toast.error('Please fill in all required fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return false;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return false;
    }

    if (!termsAgreed) {
      toast.error('You must agree to the terms and conditions.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      toast.success('Account created successfully!');
      setFormData({
        role: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAgreed: false,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 dark:text-white font-sans">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center mb-9">
        {/* Left Side */}
        <div className="w-full md:w-1/2 px-6 md:px-12 py-10">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center gap-0 cursor-pointer">
              <img
                src={navLogo}
                alt="Logo"
                className="w-8 h-8 object-cover m-0 p-0"
                loading="lazy"
              />
              <span className="font-clashDisplay font-semibold text-2xl leading-9 tracking-tight ml-1">
                orkly
              </span>
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mb-2 font-clashDisplay">
            Sign up for an account
          </h2>
          <p className="text-sm text-gray-600 dark:text-white mb-6">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Register as*
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:text-black"
              >
                <option value="">Select Role</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Employer">Employer</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password*
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm password*
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm">
                I agree to the{' '}
                <a href="#" className="text-indigo-600 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Sign up
            </button>
          </form>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center">
          <img
            src={download1}
            alt="Sign up"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
