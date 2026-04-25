'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Heart,
} from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';

export const FacebookIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12" />
  </svg>
);

export const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm5.5-.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/>
  </svg>
);

export const YoutubeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26.5 26.5 0 0 0 2 12a26.5 26.5 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26.5 26.5 0 0 0 22 12a26.5 26.5 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"/>
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.9 6.5A1.9 1.9 0 1 1 5 4.6a1.9 1.9 0 0 1 1.9 1.9zM4.5 8.5h3v11h-3zm7 0h2.9v1.5h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6v6.5h-3v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3v6h-3z"/>
  </svg>
);

export const GraduationCap = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const quickLinks = ['About', 'Programs', 'Admissions', 'Contact'];

const programs = [
  { label: 'Playgroup', href: '/programs#playgroup' },
  { label: 'Pre-Kindergarten', href: '/programs#prekg' },
  { label: 'Kindergarten', href: '/programs#kg' },
  { label: 'Primary School', href: '/programs#primary' },
  { label: 'After School Care', href: '/programs' },
];

const socials = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' }, // Yahan FacebookIcon likho
  { icon: InstagramIcon, href: '#', label: 'Instagram' }, // Yahan InstagramIcon
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },    // Yahan YoutubeIcon
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },  // Yahan LinkedinIcon
];

export default function Footer() {
  return (
    <footer id='Footer' className="bg-dark-navy relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-edu-yellow/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* ── Col 1: Brand ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold font-heading">
                <span className="text-primary-200">Edu</span>
                <span className="text-white">Kids</span>
                <span className="text-edu-yellow">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering young minds with quality education and values for a
              better tomorrow.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Col 2: Quick Links ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <h4 className="text-white font-heading font-bold text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors font-semibold"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Programs ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <h4 className="text-white font-heading font-bold text-sm mb-5 uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors font-semibold"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 4: Contact ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <h4 className="text-white font-heading font-bold text-sm mb-5 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary-200" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  123 Education Street,<br />Learning City, 400001
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary-200" />
                </div>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white text-sm transition-colors font-semibold">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary-200" />
                </div>
                <a href="mailto:info@edukids.com" className="text-gray-400 hover:text-white text-sm transition-colors font-semibold">
                  info@edukids.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-semibold">
            © 2025 EduKids. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1.5 font-semibold">
            Designed with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 text-red-400 fill-current" />
            </motion.span>{' '}
            for Education
          </p>
        </div>
      </div>
    </footer>
  );
}