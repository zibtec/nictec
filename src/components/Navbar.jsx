import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const brandTarget = isAboutPage ? "/" : "/about";

  const linkStyle = (path) =>
    `px-4 py-2 text-sm tracking-wide transition ${
      location.pathname === path
        ? "text-white border-b-2 border-white"
        : "text-gray-400 hover:text-white"
    }`;

  const handleAboutClick = (event) => {
    if (location.pathname === "/about") {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <Link
          to={brandTarget}
          className={`font-display text-sm font-semibold tracking-widest transition ${
            isAboutPage
              ? "text-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)]"
              : "text-white hover:text-[var(--seal-gold)]"
          }`}
        >
          NICK COURY
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link
            to="/about"
            className={linkStyle("/about")}
            onClick={handleAboutClick}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
