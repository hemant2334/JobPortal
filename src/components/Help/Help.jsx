import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="min-h-screen px-12 py-16 dark:bg-gray-900 ">
      <h1 className="text-4xl font-bold font-clashDisplay  dark:text-white text-center text-gray-800 mb-6"><span className="text-primaryColor">Help</span> & Support</h1>

      {/* FAQ Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-semibold font-clashDisplay text-primaryColor">Frequently Asked Questions (FAQ)</h2>
        <div className="mt-6 space-y-4 ">
          <div className="border-b border-gray-300  pb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-clashDisplay">1. How do I apply for a job on WorkLy?</h3>
            <p className="text-gray-600 mt-2 dark:text-white ">
              To apply for a job, simply browse through the job listings, click on the job title you're interested in, and then click the "Apply" button. Fill out the required fields and submit your application.
            </p>
          </div>

          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-clashDisplay">2. How can I create a profile?</h3>
            <p className="text-gray-600 mt-2 dark:text-white">
              You can create your profile by clicking the "Sign Up" button on the homepage. Fill in the required details such as your name, email, and password, and you’ll be all set to start browsing job listings.
            </p>
          </div>

          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-clashDisplay">3. What types of jobs are listed on WorkLy?</h3>
            <p className="text-gray-600 mt-2 dark:text-white">
              WorkLy offers a wide range of job listings, including full-time, part-time, freelance, remote, and internships in various industries such as technology, marketing, healthcare, and more.
            </p>
          </div>

          <div className="border-b border-gray-300 pb-4 dark:text-white">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-clashDisplay">4. How do I reset my password?</h3>
            <p className="text-gray-600 mt-2 dark:text-white">
              If you've forgotten your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we’ll send you a password reset link.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-semibold font-clashDisplay text-primaryColor">Support</h2>
        <p className="mt-4 text-gray-700 dark:text-white">
          If you need any further assistance or have any inquiries, feel free to reach out to our support team.
        </p>
        <p className="mt-2 text-gray-700 dark:text-white">
          You can contact us via the following channels:
        </p>

        <ul className="mt-4 space-y-3">
          <li className="text-gray-700 dark:text-white">
            <strong>Email:</strong> <Link to="mailto:support@workly.com" className="text-blue-600 hover:underline">support@workly.com</Link>
          </li>
          <li className="text-gray-700 dark:text-white">
            <strong>Phone:</strong> +91 123 456 7890
          </li>
          <li className="text-gray-700 dark:text-white">
            <strong>Our Location:</strong> 656/8 Kalyanpur, LKO, 226022
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-semibold font-clashDisplay text-primaryColor">Need Further Assistance?</h2>
        <p className="mt-4 text-gray-700 dark:text-white">
          If your question is not covered in the FAQ, feel free to reach out to us or Contact us.
        </p>
      </section>
    </div>
  );
};

export default Help;
