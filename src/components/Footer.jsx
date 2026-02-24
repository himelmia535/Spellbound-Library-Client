import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 space-y-10">
        {/* Top Section: Logo & Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="amargolpo.jpg"
                alt="Logo"
                className="w-14 h-14 rounded-lg shadow-md"
              />
              <span className="text-3xl font-bold text-white">
                আমারগল্প
              </span>
            </Link>
            <p className="text-gray-400 text-base md:text-left text-center leading-relaxed">
              Every story matters. <br />
              Explore and share amazing stories with our community.
            </p>
          </div>

          {/* Categories */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-3 text-white">Categories</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-violet-400 transition-all duration-200">Fiction</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-all duration-200">Non-fiction</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-all duration-200">Science Fiction</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-all duration-200">Fantasy</a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-3 text-white">More Categories</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-violet-400 transition-all duration-200">Thriller</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-all duration-200">Biography</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-all duration-200">History</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-all duration-200">Personal Development</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section: Copyright + Socials */}
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          <div className="text-sm text-gray-400 text-center md:text-left space-x-4 flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4">
            <span className="text-gray-200 font-semibold">© 2025 আমারগল্প – All rights reserved</span>
            <a href="#" className="hover:text-violet-400 transition-all duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-violet-400 transition-all duration-200">Terms of Service</a>
            <a href="https://mirhimel.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 font-bold transition-all duration-200">
              My Portfolio
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {/* Email */}
            <a href="mailto:mirhimel012@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-400 text-gray-900 hover:bg-violet-500 transition-all duration-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/mirhimel012" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-400 text-gray-900 hover:bg-violet-500 transition-all duration-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/mirhimel012" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-400 text-gray-900 hover:bg-violet-500 transition-all duration-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.73.082-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.303-5.467-1.333-5.467-5.933 0-1.311.469-2.381 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 013.003-.403c1.018.005 2.044.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.841 1.236 1.911 1.236 3.222 0 4.61-2.807 5.625-5.479 5.922.43.37.813 1.102.813 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;