import { Link } from "react-router-dom";
import {
  Heart, Phone, Mail, MapPin, Clock,
  ArrowUpRight, ChevronRight
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HOSPITAL_NAME, HOSPITAL_PHONE, HOSPITAL_EMAIL, HOSPITAL_ADDRESS, HOSPITAL_EMERGENCY } from "../../lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Facilities", path: "/facilities" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Emergency Care",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Diagnostics",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-medical-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* CTA Banner */}
      <div className="relative border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="bg-gradient-to-r from-medical-600 to-ocean-600 rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-3xl font-bold text-white font-display">
                Need Emergency Help?
              </h3>
              <p className="text-medical-100 mt-2 text-sm md:text-lg">
                Our emergency department is available 24/7. Don't hesitate to reach out.
              </p>
            </div>
            <a
              href={`tel:${HOSPITAL_EMERGENCY}`}
              className="flex items-center justify-center w-full md:w-auto gap-2 md:gap-3 bg-white text-medical-600 font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base md:text-lg whitespace-nowrap"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              {HOSPITAL_EMERGENCY}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-medical-400 to-medical-500 flex items-center justify-center">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-white" fill="white" />
              </div>
              <span className="text-lg md:text-xl font-bold text-white font-display">{HOSPITAL_NAME}</span>
            </Link>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4 md:mb-6">
              Providing world-class healthcare services with compassion, cutting-edge technology, and a commitment to excellence since 2001.
            </p>
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-medical-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-6 font-display">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-xs md:text-base text-gray-400 hover:text-medical-400 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-600 group-hover:text-medical-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-6 font-display">Our Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-xs md:text-base text-gray-400 hover:text-medical-400 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-600 group-hover:text-medical-400 transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-6 font-display">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href={`tel:${HOSPITAL_PHONE}`} className="flex items-start gap-2 md:gap-3 text-gray-400 hover:text-medical-400 transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mt-0.5 shrink-0 text-medical-400" />
                  <div className="text-xs md:text-base">
                    <p className="font-medium text-white text-[10px] md:text-sm">Phone</p>
                    <p>{HOSPITAL_PHONE}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${HOSPITAL_EMAIL}`} className="flex items-start gap-2 md:gap-3 text-gray-400 hover:text-medical-400 transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mt-0.5 shrink-0 text-medical-400" />
                  <div className="text-xs md:text-base">
                    <p className="font-medium text-white text-[10px] md:text-sm">Email</p>
                    <p>{HOSPITAL_EMAIL}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 shrink-0 text-medical-400" />
                <div className="text-xs md:text-base">
                  <p className="font-medium text-white text-[10px] md:text-sm">Address</p>
                  <p className="text-gray-400">{HOSPITAL_ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mt-0.5 shrink-0 text-medical-400" />
                <div className="text-xs md:text-base">
                  <p className="font-medium text-white text-[10px] md:text-sm">Working Hours</p>
                  <p className="text-gray-400">Mon - Sat: 8:00 AM - 10:00 PM</p>
                  <p className="text-emerald-400 text-[10px] md:text-sm">Emergency: 24/7 Open</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} {HOSPITAL_NAME}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-medical-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-medical-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-medical-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
