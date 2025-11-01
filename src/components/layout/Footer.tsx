import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "PhD Services",
    "Academic Projects",
    "Research & Development",
    "Design & Prototyping",
    "Industrial Consultancy",
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
    "Deeptech and Power Electronics",
  ];

  return (
    <footer className="section-dark">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">SW</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-foreground">Scientific Work</h3>
                <p className="text-sm text-dark-muted-foreground">Research & Engineering</p>
              </div>
            </Link>
            <p className="text-white leading-relaxed">
              A Scientific Research and Design company bridging innovations & reality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/smps-electric-control-private-limited/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/smpselectric/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/smpselectric/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@smpselectric"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-white">
                  <p>3rd Floor, LP-110, Prasanti Vihar</p>
                  <p>KIIT Post, Bhubaneswar</p>
                  <p>Odisha - 751024, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+918072566791"
                  className="text-white hover:text-primary transition-colors"
                >
                  +91 8072566791
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:scientificwork.in@gmail.com"
                  className="text-white hover:text-primary transition-colors"
                >
                  scientificwork.in@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Domain expertise */}
        <div className="mt-12 pt-8 border-t border-dark-muted">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">
            Domain Expertise
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 bg-dark-muted text-white rounded-full text-sm"
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
            <p className="text-white text-sm">
              © {currentYear} Scientific Work. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/terms"
                className="text-white hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-white hover:text-primary transition-colors"
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