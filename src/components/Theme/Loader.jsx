
import navLogo from '../../assets/images/header/logo.png';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="flex items-center gap-0">
        <img 
          src={navLogo} 
          alt="Logo" 
          className="w-40 h-40 animate-bounce"
        />
        <h1 className="text-6xl font-extrabold font-clashDisplay animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primaryColor">
          orkly
        </h1>
        
      </div>
    </div>
  );
};

export default Loader;
