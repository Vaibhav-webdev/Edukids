'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Baby, BookOpen, Pencil, School } from 'lucide-react';

const programs = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    age: 'Age 2 – 3 Years',
    image: '/Img3.png',
    icon: Baby,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100',
    cardBg: 'bg-gradient-to-br from-green-50 to-emerald-50',
    gradBg: 'from-green-200 to-emerald-200',
    desc: 'Playful discovery, sensory exploration, and social bonding in a loving environment.',
  },
  {
    id: 'prekg',
    name: 'Pre-Kindergarten',
    age: 'Age 3 – 4 Years',
    image: '/Img4.png',
    icon: Pencil,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100',
    cardBg: 'bg-gradient-to-br from-rose-50 to-pink-50',
    gradBg: 'from-rose-200 to-pink-200',
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
    gradBg: 'from-amber-200 to-yellow-200',
    desc: 'Core academics, logical thinking, and collaborative skills for young learners.',
  },
  {
    id: 'primary',
    name: 'Primary School',
    age: 'Age 6+ Years',
    image: '/Img7.png',
    icon: School,
    iconColor: 'text-primary',
    iconBg: 'bg-primary-light',
    cardBg: 'bg-gradient-to-br from-primary-50 to-indigo-50',
    gradBg: 'from-indigo-200 to-purple-200',
    desc: 'Comprehensive curriculum with focus on STEM, arts, languages, and values.',
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10 items-start">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:max-w-xs"
          >
            <span className="section-label">Our Programs</span>
            <h2 className="section-title mb-4">
              Programs Designed For Every Stage
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              From early learners to future leaders, we provide the right
              foundation for every step of their journey.
            </p>
            <Link href="/programs" className="btn-primary">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* ── Right: Program Cards ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.13 } },
            }}
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${p.cardBg} rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group`}
                >
                  {/* Image placeholder */}
                  <div className="h-44 relative overflow-hidden">
                    <Image
                      src={p.image}
                      alt="Image"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover"
                    />

                    {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/30 backdrop-blur-sm" /> */}
                  </div>


                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`icon-box w-9 h-9 rounded-xl ${p.iconBg}`}>
                        <Icon className={`w-4 h-4 ${p.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-gray-900 text-sm">
                          {p.name}
                        </h3>
                        <p className="text-xs text-gray-400 font-semibold">{p.age}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                    <Link
                      href={`/programs#${p.id}`}
                      className="inline-flex items-center gap-1 text-xs text-primary font-bold mt-3 hover:gap-2 transition-all"
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