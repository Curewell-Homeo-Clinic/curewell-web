import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl mb-4">
            Curewell Homeo Clinic
          </h3>
          <p className="text-sm">
            Specialized homeopathic solutions for holistic healing. We offer
            natural treatments for various conditions with a focus on long-term
            wellness.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition-colors">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600">
                <span className="sr-only">Facebook</span>
                <Facebook size={16} />
              </div>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600">
                <span className="sr-only">Instagram</span>
                <Instagram size={16} />
              </div>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#doctor" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#treatments"
                className="hover:text-white transition-colors"
              >
                Diseases
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li> */}
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-xl mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Skin Disorders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Hair Treatment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Gout Arthritis
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Piles Fistula
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Sexual Disorders
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-xl mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <MapPin className="text-red-600 w-11" />
              <span className="text-wrap text-sm">
                3/MA/19, Indira Gandhi Nagar, Sector-3, Ghati Karolan, Jaipur,
                Rajasthan 302017
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-600" />
              <a
                href="tel:+919460661374"
                className="hover:text-white transition-colors"
              >
                +91-9460661374
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-red-600" />
              <a
                href="mailto:curewellhomeoclinic101@gmail.com"
                className="hover:text-white transition-colors"
              >
                curewellhomeoclinic@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Curewell Homeo Clinic. All rights
            reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
