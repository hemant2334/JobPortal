import { Link } from "react-router-dom";
import { jobPosts } from "../../Data/Data.js";
import SectionText from "../SectionText/SectionText.jsx";
import { SlHeart } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";

const FeaturedJobs = () => {
  return (
    <section id="featuredjobs" className="py-20 dark:bg-gray-900 bg-white">
      <div className="container">
        <div className="w-full">
          {/* Section Title */}
          <SectionText title="Featured" subTitle="jobs" ctaName="Show all jobs" />

          {/* Job Cards List */}
          <div className="grid w-full gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {/* All job cards */}
            {jobPosts.map((joblist) => (
              <Link
                to={`job-details/${joblist.title.toLowerCase().split(" ").join("-")}`}
                key={joblist.company + "-1"} // Unique key for each job
                className="relative transition duration-300 bg-white border cursor-pointer hover:border-primaryColor hover:shadow-2xl hover:shadow-gray-100 hover:scale-105 hover:translate-y-2 hover:border-primaryColor/70 rounded-xl p-7 group"
              >
                <JobCard joblist={joblist} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const JobCard = ({ joblist }) => {
  return (
    <>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-3">
          {/* Logo Icon */}
          <div className="h-14 flex items-center justify-center w-14 rounded-lg bg-white shadow-[inset_0px_0px_25px_#e7dbff8d] p-2">
            <img
              src={joblist.logo}
              className="object-contain w-8 h-8"
              alt={joblist.company}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-xl font-semibold font-clashDisplay text-textDarkColor group-hover:text-textDarkColor transition duration-300">
              {joblist.title}
            </h3>
            <p className="text-sm gap-[6px] flex items-center text-textGrayColor/80 font-semibold ">
              <span>{joblist.company}</span>
              <span className="w-1 h-1 rounded-full bg-textDarkColor/70"></span>
              <span>{joblist.application} Application</span>
            </p>
          </div>
        </div>
        {/* Placeholder for Love Icon */}
        <div className=""></div>
      </div>

      {/* Job Roles */}
      <ul className="flex items-center gap-1 mt-5 mb-4">
        {joblist.role.map((role, index) => (
          <li
            className={`${
              index === 0
                ? "bg-[#6a1fff15] text-[#6a1fffd8]"
                : index === 1
                ? "bg-[#16a34a1f] text-[#16a34a]"
                : index === 2
                ? "bg-[#ff832a1f] text-[#ff832ae5]"
                : "bg-transparent"
            } py-[6px] text-sm px-4 rounded-full font-semibold`}
            key={index}
          >
            {role}
          </li>
        ))}
      </ul>

      {/* Job Description */}
      <p className="text-base font-medium leading-7 text-gray-700/85">
        {joblist.description}
      </p>

      {/* Divider */}
      <div className="h-[1px] w-full bg-textGrayColor/20 my-6"></div>

      {/* Salary and Date */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold font-clashDisplay text-textDarkColor/80">
          ₹{joblist.salary} <span className="text-textGrayColor">/month</span>
        </h3>
        <div className="flex items-center gap-2">
          <IoMdTime className="text-lg text-textGrayColor" />
          <p className="text-sm font-medium text-textGrayColor">
            Posted : {joblist.date}
          </p>
        </div>
      </div>

      {/* Favorite Icon */}
      <div className="absolute flex items-center justify-center w-6 h-6 p-1 transition-all duration-300 border border-gray-100 rounded-full hover:border-primaryColor/20 group hover:bg-primaryColor/10 bg-gray-300/10 top-8 right-7">
        <SlHeart className="text-sm text-gray-400 transition-all duration-300 group-hover:text-primaryColor" />
      </div>
    </>
  );
};

export default FeaturedJobs;
