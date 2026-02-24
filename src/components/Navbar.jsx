import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const navlinks = (
    <>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "")} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "")} to="/storyverse">StoryVerse</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "")} to="/shareStory">ShareStory</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "")} to="/quotes">Quotes</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "")} to="/about">About</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "")} to="/contact">Contact</NavLink>
      </li>
    </>
  );

  const [theme, setTheme] = useState("light");

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "synthwave" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-lg">
      <div className="navbar container mx-auto px-3 sm:px-8 py-2">

        {/* Start */}
        <div className="navbar-start flex items-center gap-2 lg:gap-4">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-xl w-56">
              {navlinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className="w-9 h-9 lg:w-12 lg:h-12 rounded-lg shadow-md"
              src="amargolpo.jpg"
              alt="AmarGolpo Logo"
            />
            <span className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
              আমারগল্প
            </span>
          </Link>
        </div>

        {/* Center (Desktop Only - UNCHANGED) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg font-medium">
            {navlinks}
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end flex items-center gap-2 lg:gap-4">

          {/* Theme toggle */}
          <label className="swap swap-rotate scale-90 lg:scale-100">
            <input type="checkbox" onChange={handleToggle} />
            <svg className="swap-on w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-10h1M3.515 12h1m14.142 4.95l.707.707M4.636 5.636l.707.707m12.728 0l.707-.707M4.636 18.364l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
            <svg className="swap-off w-5 h-5 lg:w-6 lg:h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>

          {/* User */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar btn-sm lg:btn-md">
                <div className="w-9 lg:w-12 rounded-full">
                  <img src={user?.photoURL || "https://i.ibb.co/WsZ4wFT/Rectangle-7.png"} alt="User Avatar" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-lg w-52">
                <li>
                  <button className="btn btn-sm btn-ghost">{user?.displayName || "User"}</button>
                </li>
                <li>
                  <button onClick={logout} className="btn btn-sm btn-ghost hover:text-red-500">Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-sm lg:btn-md bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;