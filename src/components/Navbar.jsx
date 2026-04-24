import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const linkStyle = (path) =>
    `px-4 py-2 text-sm tracking-wide transition ${
      location.pathname === path
        ? "text-white border-b-2 border-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        {isAboutPage ? (
          <span className="text-white font-semibold tracking-widest text-sm">
            NICK COURY
          </span>
        ) : (
          <Link to="/" className="text-white font-semibold tracking-widest text-sm">
            NICK COURY
          </Link>
        )}

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/about" className={linkStyle("/about")}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
