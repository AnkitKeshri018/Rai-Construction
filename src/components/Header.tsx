import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        location.pathname === "/"
          ? scrolled
            ? "bg-[#3d3d3d] shadow-lg"
            : "bg-transparent"
          : "bg-[#3d3d3d] shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-white hover:scale-105 transition-transform"
          >
            <Building2 className="h-8 w-8 text-[#ff5467]" />
            <span>Rai Construction</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[#ff5467]"
                    : "text-white hover:text-[#ff5467]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#ff5467] transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-[#ff5467] text-white hover:bg-[#ff6f7f]">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#3d3d3d] p-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block font-medium ${
                  isActive(item.href)
                    ? "text-[#ff5467]"
                    : "text-white hover:text-[#ff5467]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#ff5467] text-white w-full hover:bg-[#ff6f7f]">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
