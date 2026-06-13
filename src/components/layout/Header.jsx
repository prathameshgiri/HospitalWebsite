import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { 
  Menu, X, Phone, Clock, Mail, ChevronRight, ChevronDown,
  Heart, Calendar, LogIn
} from "lucide-react";
import { HOSPITAL_NAME, HOSPITAL_PHONE, HOSPITAL_EMAIL, NAV_LINKS, SERVICES } from "../../lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-medical-600 to-medical-700 text-white">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${HOSPITAL_PHONE}`} className="flex items-center gap-2 hover:text-medical-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>{HOSPITAL_PHONE}</span>
            </a>
            <a href={`mailto:${HOSPITAL_EMAIL}`} className="flex items-center gap-2 hover:text-medical-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>{HOSPITAL_EMAIL}</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon - Sat: 8:00 AM - 10:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-300">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-soft"></span>
              <span>Emergency 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-gray-200/50" 
          : "bg-white"
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-medical-500 to-medical-600 flex items-center justify-center shadow-lg shadow-medical-500/25 group-hover:shadow-medical-500/40 transition-shadow duration-300">
                  <Heart className="w-6 h-6 text-white" fill="white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white animate-pulse-soft"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold font-display text-gray-900 tracking-tight">
                  {HOSPITAL_NAME}
                </h1>
                <p className="text-[11px] text-medical-600 font-medium tracking-wider uppercase">
                  Your Health, Our Priority
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.path} className="relative group">
                      <Link
                        to={link.path}
                        className={`nav-link px-4 py-2 text-[15px] flex items-center gap-1 ${
                          location.pathname.startsWith(link.path) ? "active" : ""
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                      </Link>
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-2 z-50">
                        <Link to="/services" className="block px-4 py-2 text-sm text-medical-600 font-semibold hover:bg-gray-50 rounded-lg">View All Services</Link>
                        <div className="h-px bg-gray-100 my-1"></div>
                        {SERVICES.map(s => (
                          <Link 
                            key={s.id} 
                            to={`/services/${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}`}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-medical-600 hover:bg-medical-50 rounded-lg transition-colors truncate"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link px-4 py-2 text-[15px] ${
                      location.pathname === link.path ? "active" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/appointment">
                <Button size="default" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="default" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute w-full bg-white border-t shadow-xl transition-all duration-300 ${
          isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              if (link.name === "Services") {
                return (
                  <div key={link.path} className="flex flex-col">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex w-full items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                        location.pathname.startsWith(link.path) 
                          ? "bg-medical-50 text-medical-600" 
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                      <div className="pl-8 pr-4 py-2 flex flex-col gap-3">
                        <Link
                          to="/services"
                          className="text-[13px] font-bold text-medical-600"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          View All Services
                        </Link>
                        {SERVICES.map(s => (
                          <Link
                            key={s.id}
                            to={`/services/${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}`}
                            className="text-[13px] text-gray-500 hover:text-medical-600"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                    location.pathname === link.path 
                      ? "bg-medical-50 text-medical-600" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              );
            })}
            <div className="pt-3 flex flex-col gap-2">
              <Link to="/appointment">
                <Button className="w-full gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="w-full gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
