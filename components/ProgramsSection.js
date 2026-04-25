'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Baby, BookOpen, Pencil, School } from 'lucide-react';

/* ─────────────────────────────────────────────
   Module-level constants
───────────────────────────────────────────── */
const PROGRAMS = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    age: 'Age 2 – 3 Years',
    image: '/Img3.png',
    icon: Baby,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100',
    cardBg: 'bg-gradient-to-br from-green-50 to-emerald-50',
    learnColor: 'text-green-600',
    desc: 'Playful discovery, sensory exploration, and social bonding in a loving environment.',
  },
  {
    id: 'prekg',
    name: 'Pre-Kindergarten',
    age: 'Age 3 – 4 Years',
    image: '/Img4.png',
    icon: Pencil,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-100',
    cardBg: 'bg-gradient-to-br from-rose-50 to-pink-50',
    learnColor: 'text-rose-600',
    desc: 'Building early literacy, creativity, and confidence through structured play.',
  },
  {
    id: 'kg',
    name: 'Kindergarten',
    age: 'Age 4 – 5 Years',
    image: '/Img5.png',
    icon: BookOpen,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
    cardBg: 'bg-gradient-to-br from-amber-50 to-yellow-50',
    learnColor: 'text-amber-600',
    desc: 'Core academics, logical thinking, and collaborative skills for young learners.',
  },
  {
    id: 'primary',
    name: 'Primary School',
    age: 'Age 6+ Years',
    image: '/Img7.png',
    icon: School,
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-100',
    cardBg: 'bg-gradient-to-br from-violet-50 to-indigo-50',
    learnColor: 'text-violet-600',
    desc: 'Comprehensive curriculum with focus on STEM, arts, languages, and values.',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function ProgramsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Outer layout: stacked on mobile, side-by-side on lg ── */}
        <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-start gap-10">

          {/* ── Left: Section text ── */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:max-w-xs lg:shrink-0 text-center lg:text-left"
          >
            {/* Section label */}
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1.5 rounded-full mb-4">
              Our Programs
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Programs Designed For Every Stage
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7">
              From early learners to future leaders, we provide the right
              foundation for every step of their journey.
            </p>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 active:scale-[0.98] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-violet-200 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500"
            >
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* ── Right: Program Cards ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardStagger}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 w-full"
          >
            {PROGRAMS.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.id}
                  variants={cardVariant}
                  whileHover={prefersReducedMotion ? {} : { y: -7, scale: 1.02 }}
                  className={`${p.cardBg} rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col`}
                >
                  {/* Card image */}
                  <div className="h-40 sm:h-44 relative overflow-hidden shrink-0">
                    <Image
                      src={p.image}
                      alt={`${p.name} program – ${p.age}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${p.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-4 h-4 ${p.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm leading-tight">
                          {p.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-gray-400 font-semibold">{p.age}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed flex-1">
                      {p.desc}
                    </p>

                    <Link
                      href={`/programs#${p.id}`}
                      className={`inline-flex items-center gap-1 text-xs font-bold mt-3 ${p.learnColor} hover:gap-2 transition-all duration-200`}
                    >
                      Learn More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}