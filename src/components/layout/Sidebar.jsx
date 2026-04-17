
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icon.png";

const Sidebar = ({ open, setOpen }) => {
  const menuItems = [
    { icon: Icon, label: "Bacheca annunci", path: "/" },
    { icon: Icon, label: "Simulatore", path: "/simulator" },
    { icon: Icon, label: "Simulazioni archiviate", path: "/archive" },
    { icon: Icon, label: "Quadernino degli errori", path: "/errors" },
    { icon: Icon, label: "Simulazione ufficiale", path: "/official" },
  ];

  return (
    <>
      {/* OVERLAY (MOBILE) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 lg:top-20 h-full lg:h-[calc(100vh-80px)] w-[260px]
          bg-[#0055D1] text-white p-6 flex flex-col z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          lg:rounded-r-[40px]
        `}
      >
        {/* CLOSE BUTTON (MOBILE) */}
        <button
          className="lg:hidden text-right mb-6 text-xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* DASHBOARD BUTTON */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `py-3 rounded-xl mb-8 text-center transition ${
              isActive ? "bg-[#15242B]" : "bg-[#1b4db5]"
            }`
          }
        >
          Dashboard
        </NavLink>

        {/* MENU */}
        <div className="flex flex-col gap-6 flex-1">

          {menuItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-black/30"
                    : "opacity-90 hover:opacity-100 hover:bg-white/10"
                }`
              }
            >
              <img src={item.icon} className="w-5 h-5" />
              <span className="text-sm lg:text-base">{item.label}</span>
            </NavLink>
          ))}

        </div>

        {/* LOGOUT */}
        <button className="bg-white text-red-500 py-3 rounded-full mt-6">
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;