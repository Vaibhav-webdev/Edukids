'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Menu, X, ChevronDown, Phone, LogIn,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Programs',
    href: '/programs',
    dropdown: [
      { label: 'Playgroup (Age 2–3)', href: '/programs#playgroup' },
      { label: 'Pre-Kindergarten (Age 3–4)', href: '/programs#prekg' },
      { label: 'Kindergarten (Age 4–5)', href: '/programs#kg' },
      { label: 'Primary School (Age 6+)', href: '/programs#primary' },
    ],
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(92,79,207,0.10)] py-2'
          : 'bg-white py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-md shadow-primary/30"
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-[1.35rem] font-extrabold font-heading tracking-tight">
              <span className="text-primary">Edu</span>
              <span className="text-gray-800">Kids</span>
              <span className="text-edu-yellow">.</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 group ${
                    pathname === link.href
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-[0_8px_40px_rgba(92,79,207,0.15)] border border-gray-100 overflow-hidden p-2"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-semibold"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/admissions"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary-700 transition-all duration-300 hover:shadow-button hover:-translate-y-0.5"
            >
              <LogIn className="w-4 h-4" />
              Parent Login
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 px-4 rounded-2xl text-sm font-bold transition-all ${
                      pathname === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 px-4 rounded-xl text-xs text-gray-500 hover:text-primary font-semibold transition-colors"
                        >
                          • {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-3 border-t border-gray-100"
              >
                <Link
                  href="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 px-4 rounded-2xl font-bold text-sm hover:bg-primary-700 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Parent Login
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}