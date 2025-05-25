import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/images/header/logo.png';
import download3 from "../../assets/images/gifs/download3.gif";

const Resetpass = () => {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center dark:bg-gray-900 justify-center bg-white font-sans">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center mb-16">
                {/* Left Section */}
                <div className="w-full md:w-1/2 px-6 md:px-12 py-10">
                    <div className="flex items-center mb-6">
                        <Link to="/" className="flex items-center gap-0 cursor-pointer">
                            <div className="w-8 h-8 ">
                                <img
                                    src={navLogo}
                                    loading="lazy"
                                    alt="W"
                                    className="w-8 h-8 object-cover m-0 p-0"
                                />
                            </div>
                            <span className="font-clashDisplay font-semibold text-2xl leading-9 tracking-[-0.01em]">
                                orkly
                            </span>
                        </Link>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white font-clashDisplay mb-2">Reset your Password</h2>
                    <p className="text-sm text-gray-600 dark:text-white mb-6">
                        or{' '}
                        <Link to="/login" className="text-indigo-600 hover:underline">
                            Sign in
                        </Link>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm dark:text-white font-medium text-gray-700 mb-1">Email address*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
                        >
                            Send Verification Code
                        </button>
                    </form>
                </div>

                {/* Right Section (Image) */}
                <div className="w-full md:w-1/2 hidden md:flex justify-center">
                    <img
                        src={download3}
                        alt="Reset Password illustration"
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Resetpass;
