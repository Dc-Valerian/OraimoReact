import { FaSearchLocation } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full">
      <header className="bg-[#1D1D1D] text-white px-6 py-6 flex items-center justify-between">
        <div className="text-[#76CF03] text-3xl font-bold tracking-wide">
          Oraimo.
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <span className="hover:text-green-400 cursor-pointer">
            Flash Sale
          </span>
          <span className="hover:text-green-400 cursor-pointer">
            Daily Deals🔥
          </span>
          <span className="hover:text-green-400 cursor-pointer">Products</span>
          <span className="hover:text-green-400 cursor-pointer">
            Hot & News
          </span>
        </nav>

        <div className="flex items-center gap-5">
          <FaSearchLocation className="w-5 h-5 cursor-pointer" />
          <IoCartOutline className="w-5 h-5 cursor-pointer" />
        </div>
        
      </header>
    </div>
  );
};

export default Header;
