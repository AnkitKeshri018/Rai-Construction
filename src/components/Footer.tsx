import { Link } from "react-router-dom";
import { Building2, MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "BIM 3D Modeling",
    "Construction Documents", 
    "Scan to BIM",
    "3D Renders & Walkthroughs",
    "Interior Designing",
    "Quantity Take-Off"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-accent" />
              <span className="text-xl font-montserrat font-bold">
                Rai Construction Solutions
              </span>
            </Link>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in comprehensive construction consultancy, bringing precision, 
              innovation, and expertise to every project.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">123 Construction Ave, Building City, BC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">info@raiconstruction.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-accent">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-smooth hover:translate-x-1 inline-block text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-accent">
              Stay Connected
            </h3>
            
            <p className="text-primary-foreground/80 text-sm mb-4">
              Follow us for the latest updates and construction insights.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 hover:bg-accent hover:scale-110 transition-smooth rounded-lg group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary-foreground/80 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <h4 className="font-montserrat font-medium mb-3 text-accent text-sm">
                Newsletter Signup
              </h4>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-primary-foreground/20 border border-primary-foreground/30 rounded text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent"
                />
                <button className="w-full bg-accent hover:bg-accent-light text-white px-4 py-2 rounded text-sm font-medium transition-smooth hover-scale">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Rai Construction Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;