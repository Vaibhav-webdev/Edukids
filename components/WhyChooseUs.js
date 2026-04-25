'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, Activity, Leaf, Sun, CheckCircle2 } from 'lucide-react';


const reasons = [
  {
    icon: Home,
    color: 'text-red-500',
    bg: 'bg-red-50',
    title: 'Strong Academic Foundation',
    desc: 'Building core skills for lifelong learning.',
  },
  {
    icon: Activity,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    title: 'Co-Curricular Activities',
    desc: 'Sports, arts, music & leadership programs.',
  },
  {
    icon: Leaf,
    color: 'text-green-500',
    bg: 'bg-green-50',
    title: 'Life Skills & Values',
    desc: 'Instilling confidence, empathy & responsibility.',
  },
  {
    icon: Sun,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    title: 'Safe & Nurturing Environment',
    desc: 'A place where children feel secure and happy.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Blob Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center min-h-[420px]"
          >
            {/* Purple blob background */}
            <motion.div
              animate={{
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                ],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-80 h-80 bg-primary-light"
            />

            {/* Kid illustration */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative z-10 w-94 h-100 shadow-2xl"
            >
              <Image
                src="/Img2.png"
                alt="Kids-Girl"
                fill
                sizes="(max-width: 740px) 100vw, 500px"
                className="object-cover mt-4"
              />
            </motion.div>

            {/* Teacher badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="absolute bottom-8 right-4 bg-white rounded-2xl px-5 py-3.5 shadow-card-hover z-20"
            >
              <p className="text-4xl font-extrabold font-heading text-primary leading-none">
                25+
              </p>
              <p className="text-sm font-bold text-gray-700 mt-0.5">Experienced</p>
              <p className="text-sm font-bold text-gray-700">Teachers</p>
            </motion.div>

            {/* Star decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute top-12 right-16 text-primary/40 text-4xl pointer-events-none"
            >
              ✦
            </motion.div>
            {/* Paper plane */}
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 right-8 text-2xl opacity-50 pointer-events-none"
            >
              ✈️
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Why Choose EduKids?</span>
            <h2 className="section-title mb-4">
              We Focus on{' '}
              <span className="text-primary">Holistic Development</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              We combine academics, creativity, and values to shape confident,
              compassionate, and capable individuals.
            </p>

            {/* Reasons list */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
              }}
              className="space-y-5"
            >
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.title}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                    }}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <div className={`icon-box ${r.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className={`w-5 h-5 ${r.color}`} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 text-sm mb-0.5 flex items-center gap-2">
                        {r.title}
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}