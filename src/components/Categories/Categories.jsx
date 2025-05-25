import { Link, useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { categories } from "../../Data/Data.js";
import SectionText from "../SectionText/SectionText.jsx";
import { useState } from "react";

const Categories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleShowAllJobsClick = () => {
    navigate("/Signin");
  };

  return (
    <section className="py-10 dark:bg-gray-900">
      <div className="container">
        <SectionText
          title="Explore by"
          subTitle="category"
          ctaName="Show all jobs"
          onCtaClick={handleShowAllJobsClick}
        />

        <div className="w-full mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/login"
                onClick={() => window.scrollTo(0, 0)}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="w-full border border-[#D6DDEB] dark:bg-white p-8 rounded-xl transition duration-300 group hover:bg-gradient-to-tl hover:from-primaryColor hover:to-primaryColor/85 hover:shadow-2xl hover:-translate-y-2 hover:border-primaryColor shadow-primaryColor/10"
              >
                <div className="p-2 mb-3 rounded-lg shadow-lg h-18 w-14 bg-white flex items-center justify-center">
                  <img
                    src={
                      hoveredCard === category.id
                        ? category.hoverIcon || category.icon
                        : category.icon
                    }
                    alt={category.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col justify-between gap-2">
                  <h3 className="text-xl md:text-2xl dark:text-black font-semibold font-clashDisplay text-textDarkColor/90 group-hover:text-white transition duration-300">
                    {category.name}
                  </h3>

                  <div className="flex items-center justify-between pt-4 transition duration-300 text-cardTextGrayColor group-hover:text-white">
                    <p className="text-sm sm:text-base leading-tight">
                      {category.jobs} Jobs available
                    </p>
                    <GoArrowRight
                      size={20}
                      className="mt-[2px] group-hover:translate-x-1 transition duration-300"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
