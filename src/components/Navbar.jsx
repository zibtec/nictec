import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    `rounded-full px-4 py-2 text-sm font-semibold tracking-[0.14em] transition ${
      location.pathname === path
        ? "border border-[var(--seal-gold)] bg-[var(--seal-gold)] text-[var(--velvet-obsidian)]"
        : "border border-[rgba(247,235,224,0.12)] text-[var(--muted-ivory)] hover:border-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)]"
    }`;

  const handleAboutClick = (event) => {
    if (location.pathname === "/about") {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  };

  return (
    <nav className="nav-shell fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo / Name */}
        <span className="font-display text-sm font-semibold tracking-widest text-[var(--seal-gold)]">
          NICK COURY
        </span>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/blog" className={linkStyle("/blog")}>
            Blog
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
