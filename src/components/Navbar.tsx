import { Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/technology", label: "Technology" },
  { to: "/deployments", label: "Deployments" },
  { to: "/why-us", label: "Why Us" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/10 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-accent" />
          <span className="text-lg font-bold text-primary-foreground font-display">WasteWise</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-primary-foreground/70">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-accent transition-colors ${
                location.pathname === link.to ? "text-accent" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
