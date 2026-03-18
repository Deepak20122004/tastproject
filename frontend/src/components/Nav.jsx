import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-semibold">Exclusive</h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <Link to="/login">Sign Up</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-40"
            />
            <FaSearch className="text-gray-500" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <div className="relative cursor-pointer">
              <FaHeart />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                4
              </span>
            </div>

            <div className="relative cursor-pointer">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                2
              </span>
            </div>

            <FaUser className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
