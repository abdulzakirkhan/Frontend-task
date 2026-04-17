
import logo from "../../assets/logo.png";
import User from "../../assets/user.jpg";
import headlogo from "../../assets/headlogo.png";

const Header = ({ onMenuClick }) => {
  return (
    <div className="flex items-center justify-between px-4 lg:px-10 h-18 w-full fixed top-0 left-0 z-50 bg-white">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={onMenuClick}
        >
          ☰
        </button>

        {/* LOGO */}
        <img src={logo} className="w-32 lg:w-48" />
      </div>

      {/* CENTER SECTION (HIDDEN ON MOBILE) */}
      <div className="hidden lg:flex items-center gap-10">

        {/* TEXT */}
        <div>
          <h1 className="text-2xl font-bold text-[#2D3154]">
            Ciao, Dr. Luca!
          </h1>
          <p className="text-gray-400 text-sm">
            Inizia la giornata con un nuovo corso!
          </p>
        </div>

        {/* SCORE */}
        <div className="relative w-44 h-12">
          <div className="absolute w-full h-full bg-blue-600 rounded-full"></div>

          <div className="absolute -left-2 top-1 w-[90%] h-10 bg-[#FBBF24] rounded-full flex items-center justify-end gap-5 z-10 pr-3">
            <span className="font-bold text-xl">345</span>
            <img src={headlogo} className="w-8" />
          </div>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div>
        <img
          src={User}
          className="w-10 h-10 lg:w-16 lg:h-16 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;