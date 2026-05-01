import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    `rounded-full border px-4 py-2 text-sm text-[var(--muted-ivory)] transition hover:border-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)] ${
      location.pathname === path
        ? "border-[var(--seal-gold)] bg-[rgba(194,145,44,0.12)] text-[var(--ethereal-ivory)]"
        : "border-[var(--soft-ivory)]"
    }`;

  const handleTopClick = (event, path) => {
    if (location.pathname === path) {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  };

  return (
    <header className="nav-shell fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center">
        <Link to="/" onClick={(event) => handleTopClick(event, "/")} className="flex-shrink-0 no-underline">
          <div className="font-display text-2xl font-semibold tracking-wide text-[var(--seal-gold)]">Nick Coury</div>
          <div className="text-xs text-[var(--muted-ivory)]">
            Develop <span className="text-[var(--seal-gold)]">•</span> Secure <span className="text-[var(--seal-gold)]">•</span> Operate
          </div>
        </Link>

        <nav className="flex flex-wrap gap-3 lg:ml-auto" aria-label="Primary navigation">
          <Link to="/experience" className={linkStyle("/experience")} onClick={(event) => handleTopClick(event, "/experience")}>
            Experience
          </Link>

          <Link to="/initiatives" className={linkStyle("/initiatives")} onClick={(event) => handleTopClick(event, "/initiatives")}>
            Project Initiatives
          </Link>

          <Link to="/credentials" className={linkStyle("/credentials")} onClick={(event) => handleTopClick(event, "/credentials")}>
            Credentials
          </Link>

          <Link to="/about" className={linkStyle("/about")} onClick={(event) => handleTopClick(event, "/about")}>
            About
          </Link>

          <Link to="/contact" className={linkStyle("/contact")} onClick={(event) => handleTopClick(event, "/contact")}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
