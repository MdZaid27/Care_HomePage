"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Menu, Mic, X } from "lucide-react";
import { create } from "zustand";
import CareLogo from "../assets/cares-logo.webp";
import {
  FaUserMd,
  FaHospital,
  FaStethoscope,
  FaCalendarAlt,
  FaPhoneAlt,
} from "react-icons/fa";

interface LanguageStore {
  language: string;
  setLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageStore>((set) => ({
  language: "English",
  setLanguage: (lang) => set({ language: lang }),
}));

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const { language, setLanguage } = useLanguageStore();

  const topNavItems = [
    "About Us",
    "International Patients",
    "Pay Online",
    "Online Lab Reports",
    "Careers",
    "Enquire Now",
  ];

  const navItems = [
    { icon: <FaUserMd />, text: "Doctors", href: "#" },
    { icon: <FaStethoscope />, text: "Specialities & Treatments", href: "#" },
    { icon: <FaHospital />, text: "Hospitals & Directions", href: "#" },
    { icon: <FaCalendarAlt />, text: "Book an Appointment", href: "#" },
    { icon: <FaPhoneAlt />, text: "Contact Us", href: "#" },
  ];

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Effect to detect scroll and update `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Hide the teal part after scrolling
      } else {
        setIsScrolled(false); // Show the teal part when near the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      {!isScrolled && (
        <div className="bg-teal-500 text-white transition-all duration-300">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              <nav className="hidden lg:flex space-x-4">
                {topNavItems.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-sm hover:text-gray-200"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-4">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[120px] bg-white text-teal-500 border-none">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Telugu">Telugu</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[120px] bg-white text-teal-500 border-none">
                    <SelectValue placeholder="Hospitals" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-gray-200"
                  onClick={toggleSearch}
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search here"
                className="w-full pr-20 pl-4 py-2 rounded-full"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-12 top-1/2 transform -translate-y-1/2"
              >
                <Mic className="h-5 w-5 text-gray-500" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={toggleSearch}
              >
                <X className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-2">
        {" "}
        {/* Reduced py-4 to py-2 */}
        <div className="flex items-center justify-between">
          <Image
            src={CareLogo}
            alt="Care Hospitals Logo"
            width={100}
            height={33}
            className="ml-4"
          />
          <nav className="hidden lg:flex space-x-6">
            {" "}
            {/* Reduced space-x-8 to space-x-6 */}
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span className="text-xl">{item.icon}</span>{" "}
                {/* Reduced from text-2xl */}
                <span className="font-semibold text-sm">{item.text}</span>{" "}
                {/* Added text-sm */}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white p-4">
          <nav className="flex flex-col space-y-2">
            {topNavItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {item}
              </Link>
            ))}
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
