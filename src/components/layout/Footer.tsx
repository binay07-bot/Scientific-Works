import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "PhD Services",
    "Academic Projects",
    "Research & Development",
    "Design & Prototyping",
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const domains = [
    "Electrical & Electronics",
    "Mechanical Engineering",
    "Computer Science",
    "AI & ML Technologies",
  ];

  return (
    <footer className="section-dark">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SW</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-foreground">Scientific Work</h3>
                <p className="text-sm text-dark-muted-foreground">Research & Engineering</p>
              </div>
            </Link>
            <p className="text-dark-muted-foreground leading-relaxed">
              A Scientific Research and Design unit of 
              SARALA POWERTECH CONSULTING ENGINEERS LLP, bridging innovations & reality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-dark-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-dark-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-dark-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-dark-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-dark-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-dark-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-dark-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-dark-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-dark-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-dark-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-dark-foreground mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-dark-muted-foreground">
                  <p>3rd Floor, LP-110, Prasanti Vihar</p>
                  <p>KIIT Post, Bhubaneswar</p>
                  <p>Odisha - 751024, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+919788888292"
                  className="text-dark-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8072566791
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:info@scientificwork.in"
                  className="text-dark-muted-foreground hover:text-primary transition-colors"
                >
                  info@scientificwork.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Domain expertise */}
        <div className="mt-12 pt-8 border-t border-dark-muted">
          <h4 className="text-lg font-semibold text-dark-foreground mb-4 text-center">
            Domain Expertise
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 bg-dark-muted text-dark-foreground rounded-full text-sm"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-dark-muted-foreground text-sm">
              © {currentYear} Scientific Work. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/terms"
                className="text-dark-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-dark-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;