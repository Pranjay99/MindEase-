import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Links */}
          <div className="flex items-center">
            <div className="flex-shrink-0 text-xl font-bold">MindEase</div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/explore"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Explore
                </Link>
                <Link
                  to="/expert"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Expert
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Profile and Login */}
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Profile
            </Link>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
