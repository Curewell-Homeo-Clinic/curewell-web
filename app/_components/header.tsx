"use client";

import React from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              {/* <img src="/curewell-logo.png" alt="CureWell" className="h-8" /> */}
              <span className="text-xl font-semibold text-red-700">
                Curewell Homeo Clinic
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Now with 3-column layout */}
          <div className="hidden md:flex flex-1 items-center justify-between px-8">
            {/* Centered Navigation Links */}
            <div className="flex-1" /> {/* Left spacer */}
            <div className="flex items-center justify-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                Home
              </a>
              <a
                href="/#treatments"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                Diseases
              </a>
              {/* <a
                href="/blog"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                Blog
              </a> */}
              <a
                href="/#doctor"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                About
              </a>
              {/* <a
                href="/contact"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                Contact
              </a> */}
            </div>
            {/* Appointment Button */}
            <div className="flex-1 flex justify-end">
              <a
                href="/appointment"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors shadow-sm"
              >
                Make an Appointment
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                Home
              </a>
              <a
                href="/#treatments"
                className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                Diseases
              </a>
              {/* <a
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                Blog
              </a> */}
              <a
                href="/#doctor"
                className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                About
              </a>
              {/* <a
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                Contact
              </a> */}
              <a
                href="/appointment"
                className="block px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-sm"
              >
                Make an Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
