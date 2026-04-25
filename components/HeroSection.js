'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Bird, ShieldCheck, School2, Plane, Star, Rocket, Sparkles,
  BookOpen, Heart, Users,
} from 'lucide-react';

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const featureBadges = [
  { icon: ShieldCheck, label: 'Safe Environment', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Star, label: 'Expert Teachers', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Heart, label: 'Holistic Growth', color: 'text-red-500', bg: 'bg-red-50' },
];

/* ─── Floating decorations ─── */
const floaters = [
  { icon: Rocket, top: '8%', left: '5%', delay: 0, size: 'text-2xl' },
  { icon: Star, top: '15%', right: '8%', delay: 0.5, size: 'text-xl' },
  { icon: Plane, top: '50%', right: '60%', delay: 1, size: 'text-3xl' },
  { icon: Sparkles, bottom: '10%', left: '50%', delay: 0.8, size: 'text-2xl' },
  { icon: School2, top: '80%', left: '2%', delay: 0.3, size: 'text-2xl' },
  { icon: Bird, top: '10%', right: '34%', delay: 0.3, size: 'text-2xl' },
];

/* ─── Kid Cards (visual placeholders) ─── */
function KidCard({ gradient, emoji, className }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl flex items-end justify-center ${gradient} ${className}`}
    >
      <span className="text-7xl pb-2 select-none">{emoji}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-white min-h-screen pt-20 pb-16 bg-hero-gradient overflow-hidden flex items-center">
      {/* Background dots */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      {/* Floating decorative elements */}
      {floaters.map((f, i) => (
        <motion.div
          key={i}
          className={`absolute ${f.size} select-none pointer-events-none animate-float`}
          style={{
            top: f.top,
            bottom: f.bottom,
            left: f.left,
            right: f.right,
            animationDelay: `${f.delay}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: 0.8 + f.delay * 0.2, duration: 0.5 }}
        >
          <f.icon size={35} color='gray' />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left: Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-edu-yellow/20 border border-edu-yellow/40 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-6">
                <Star className="w-3.5 h-3.5 fill-current text-edu-yellow" />
                The Best Start For Every Child
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 leading-[1.1] mb-6"
            >
              Nurturing Minds.{' '}
              <span className="block">Building Brighter</span>
              <span className="text-primary relative">
                Futures.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10 Q75 2 150 8 Q225 14 298 6"
                    stroke="#FFC107"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md"
            >
              A joyful learning place where children grow, explore, and achieve
              beyond imagination.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Link href="/programs" className="btn-primary text-base px-8 py-4 shadow-button">
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline text-base px-8 py-4">
                Book a Campus Tour
              </Link>
            </motion.div>

            {/* Feature Badges */}
            <motion.div variants={stagger} className="flex flex-wrap gap-3">
              {featureBadges.map((b) => (
                <motion.div
                  key={b.label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="feature-badge"
                >
                  <div className={`w-7 h-7 rounded-lg ${b.bg} flex items-center justify-center`}>
                    <b.icon className={`w-4 h-4 ${b.color}`} />
                  </div>
                  <span>{b.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Illustration ── */}
          <motion.div
            className="relative flex items-center justify-center min-h-[480px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Yellow Blob */}
            <motion.div
              animate={{ borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '40% 60% 70% 30% / 40% 50% 60% 50%', '60% 40% 30% 70% / 60% 30% 70% 40%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-64 h-64 bg-edu-yellow top-4 left-8 opacity-85"
            />

            {/* Purple Blob */}
            <motion.div
              animate={{ borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '60% 40% 30% 70% / 60% 30% 70% 40%', '40% 60% 70% 30% / 40% 50% 60% 50%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-60 h-60 bg-primary right-4 bottom-8 opacity-80"
            />

            {/* Kid 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, rotate: -2 }}
              className="absolute z-10 w-[40vw]"
            >
              <Image
                src="/Home_Kids.png"
                alt="Kids"
                width={700} // Set explicit width
                height={600} // Set explicit height
                priority // <--- ADD THIS for LCP (above the fold)
                loading="eager" // <--- ADD THIS (optional, priority implies this)
                style={{
                  width: '100%', // Example: Responsive width
                  height: 'auto', // <--- IMPORTANT: Maintains aspect ratio
                }}
              />
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="absolute right-0 bottom-20 z-20 bg-white rounded-2xl p-4 shadow-card-hover max-w-[180px]"
            >
              <p className="text-sm text-gray-400 font-semibold mb-1">Trusted by</p>
              <p className="text-3xl font-extrabold font-heading text-gray-900">7,500+</p>
              <p className="text-sm font-bold text-gray-600 mb-2">Happy Parents</p>
              <div className="flex -space-x-2">
                {['👩', '👨', '👩‍🦱', '👨‍🦲'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sparkle decorations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-6 right-36 text-edu-yellow text-2xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-12 left-36 text-primary text-xl"
            >
              ✦
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}