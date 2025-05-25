
import Brands from "../Brands/Brands";
import Countup from "./Countup";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:text-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold font-clashDisplay  dark:text-white text-center text-gray-800 mb-6">
          <span className="text-primaryColor">About</span>  Workly
        </h2>

        {/* Description */}
        <p className="text-lg text-center dark:text-white text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Workly is a modern job portal designed to bridge the gap between
          talented individuals and forward-thinking companies. We aim to make
          hiring faster, smarter, and more human.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
          {[
            {
              title: "Our Mission",
              content:
                "To empower careers and simplify recruitment through smart, secure, and efficient technology.",
            },
            {
              title: "What We Offer",
              content: (
                <ul className="list-disc list-inside text-white/90 space-y-1 text-left">
                  <li>Smart job recommendations</li>
                  <li>Verified employer listings</li>
                  <li>Real-time application tracking</li>
                  <li>One-click job applications</li>
                </ul>
              ),
            },
            {
              title: "Who We Help",
              content:
                "From freshers to experienced professionals, and startups to large enterprises — Workly supports every career journey.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#7110c6] text-white transition duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-2xl hover:shadow-[#b084ff44] cursor-pointer"
            >
              <h3 className="text-xl font-semibold font-clashDisplay mb-3">{card.title}</h3>
              <p className="text-white/90">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-semibold dark:text-white font-clashDisplay text-gray-800 mb-2">
            Why Choose Workly?
          </h4>
          <p className="text-gray-600 max-w-xl dark:text-white mx-auto leading-relaxed">
            We combine clean design, efficient tools, and secure technology to
            make job hunting a seamless experience for everyone.
          </p>
        </div>

         {/* Brands Component */}
         <Brands />

        {/* Countup Stats */}
        <Countup className="dark:text-white" />
      </div>
    </section>
  );
};

export default About;
