import CountUp from 'react-countup';

const Stats = () => {
  return (
    <section className="py-10 bg-gray-5 dark:text-white">
      <div className="container grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 text-center">
        <div>
          <h2 className="text-3xl font-clashDisplay font-semibold text-primary">
            <CountUp end={7000} duration={7} />
          </h2>
          <p className="text-gray-600 dark:text-white  mt-1">Jobs Posted</p>
        </div>
        <div>
          <h2 className="text-3xl font-clashDisplay font-semibold text-primary">
            <CountUp end={300} duration={7} />
          </h2>
          <p className="text-gray-600 dark:text-white mt-1">Companies</p>
        </div>
        <div>
          <h2 className="text-3xl font-clashDisplay font-semibold text-primary">
            <CountUp end={9000} duration={7} />
          </h2>
          <p className="text-gray-600 dark:text-white mt-1">Applications</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold font-clashDisplay text-primary">
            <CountUp end={2000} duration={7} />
          </h2>
          <p className="text-gray-600 dark:text-white mt-1">Hires</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
