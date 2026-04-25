'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Bird, ShieldCheck, School2, Plane, Star, Rocket, Sparkles, Heart,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Module-level constants (never recreated on render)
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const FEATURE_BADGES = [
  { icon: ShieldCheck, label: 'Safe Environment', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Star, label: 'Expert Teachers', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Heart, label: 'Holistic Growth', color: 'text-rose-500', bg: 'bg-rose-50' },
];

/* Shown only on md+ — hidden on mobile for performance */
const FLOATERS = [
  { icon: Rocket, top: '8%', left: '5%', delay: 0 },
  { icon: Star, top: '15%', right: '8%', delay: 0.5 },
  { icon: Plane, top: '50%', right: '60%', delay: 1 },
  { icon: Sparkles, bottom: '10%', left: '50%', delay: 0.8 },
  { icon: School2, top: '80%', left: '2%', delay: 0.3 },
  { icon: Bird, top: '10%', right: '34%', delay: 0.3 },
];

/* Blob border-radius keyframes (CSS-only morphing, no JS per frame) */
const BLOB_A = [
  '60% 40% 30% 70% / 60% 30% 70% 40%',
  '40% 60% 70% 30% / 40% 50% 60% 50%',
  '60% 40% 30% 70% / 60% 30% 70% 40%',
];
const BLOB_B = [
  '40% 60% 70% 30% / 40% 50% 60% 50%',
  '60% 40% 30% 70% / 60% 30% 70% 40%',
  '40% 60% 70% 30% / 40% 50% 60% 50%',
];

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function HeroSection() {
  /* Respects OS "reduce motion" setting — improves perf on low-end phones */
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-violet-50 pt-20 pb-16 overflow-hidden flex items-center">

      {/* ── Background dot grid (pure CSS, zero JS) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* ── Floating icons — hidden on mobile ── */}
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="absolute hidden md:block select-none pointer-events-none"
          style={{ top: f.top, bottom: f.bottom, left: f.left, right: f.right }}
          initial={{ opacity: 0, scale: 0 }}
          animate={prefersReducedMotion ? { opacity: 0.4, scale: 1 } : { opacity: 0.45, scale: 1 }}
          transition={{ delay: 0.7 + f.delay * 0.18, duration: 0.45 }}
        >
          <f.icon size={30} color="#d1d5db" />
        </motion.div>
      ))}

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* ──────────────── LEFT: Content ──────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Top badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-5">
                <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                The Best Start For Every Child
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-5"
            >
              Nurturing Minds.{' '}
              <span className="block">Building Brighter</span>
              <span className="relative inline-block text-violet-600">
                Futures.
                {/* Underline squiggle */}
                <svg
                  aria-hidden="true"
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
              className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7 max-w-md"
            >
              A joyful learning place where children grow, explore, and achieve
              beyond imagination.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col xs:flex-row sm:flex-row gap-3 mb-8 w-full sm:w-auto"
            >
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-violet-200 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-violet-600 text-violet-600 hover:bg-violet-50 active:scale-[0.98] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500"
              >
                Book a Campus Tour
              </Link>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              variants={stagger}
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
            >
              {FEATURE_BADGES.map((b) => (
                <motion.div
                  key={b.label}
                  variants={fadeUp}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm"
                >
                  <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg ${b.bg} flex items-center justify-center shrink-0`}>
                    <b.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${b.color}`} />
                  </span>
                  <span>{b.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ──────────────── RIGHT: Illustration ──────────────── */}
          <motion.div
            className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.75 }}
          >
            {/* Yellow blob — lightweight: only border-radius animates, GPU composite */}
            <motion.div
              aria-hidden="true"
              animate={prefersReducedMotion ? {} : { borderRadius: BLOB_A }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-3 left-3 sm:top-4 sm:left-6 lg:left-8 w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-amber-300 opacity-80"
              style={{ borderRadius: BLOB_A[0], willChange: 'border-radius' }}
            />

            {/* Purple blob */}
            <motion.div
              aria-hidden="true"
              animate={prefersReducedMotion ? {} : { borderRadius: BLOB_B }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-3 right-2 sm:bottom-6 sm:right-4 w-36 h-36 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-violet-500 opacity-75"
              style={{ borderRadius: BLOB_B[0], willChange: 'border-radius' }}
            />

            {/* Kids image — portrait, responsive */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[85vw] sm:w-[65vw] lg:w-[35vw] max-w-[620px]"
            >
              <Image
                src="/Home_Kids.png"
                alt="Happy kids learning and exploring"
                width={700}
                height={900}
                priority
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Trust Badge card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.95, duration: 0.45 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
              className="absolute right-0 bottom-10 sm:bottom-14 lg:bottom-20 z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-xl max-w-[140px] sm:max-w-[162px] lg:max-w-[178px]"
            >
              <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mb-0.5">Trusted by</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-none">7,500+</p>
              <p className="text-[11px] sm:text-sm font-bold text-gray-600 mt-0.5 mb-2">Happy Parents</p>
              <div className="flex -space-x-1.5">
                {['👩', '👨', '👩‍🦱', '👨‍🦲'].map((emoji, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] sm:text-xs"
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sparkle ✦ — only when motion is allowed */}
            {!prefersReducedMotion && (
              <>
                <motion.span
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-5 right-24 sm:right-32 lg:right-36 text-amber-400 text-lg sm:text-xl lg:text-2xl select-none pointer-events-none"
                style={{ willChange: 'transform' }}
                >
                  ✦
                </motion.span>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-8 sm:bottom-10 lg:bottom-12 left-24 sm:left-32 lg:left-36 text-violet-500 text-base sm:text-lg lg:text-xl select-none pointer-events-none"
                  style={{ willChange: 'transform' }}
                >
                  ✦
                </motion.span>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
