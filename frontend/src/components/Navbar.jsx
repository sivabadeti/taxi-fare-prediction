import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block relative text-white py-2 ${
      isActive ? "font-semibold after:w-full" : "after:w-0"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 px-6 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-xl font-semibold text-white">
          🚕 FareAI-NY
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/predict" className={linkStyle}>Predict</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 bg-gray-900 p-4 rounded-lg">
          <NavLink to="/" className={linkStyle} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/predict" className={linkStyle} onClick={() => setOpen(false)}>
            Predict
          </NavLink>
          <NavLink to="/about" className={linkStyle} onClick={() => setOpen(false)}>
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;