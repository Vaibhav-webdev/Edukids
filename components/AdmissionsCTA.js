'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const decorStars = [
  { style: { top: '15%', left: '4%' }, size: 'text-2xl', delay: 0 },
  { style: { top: '70%', left: '6%' }, size: 'text-xl', delay: 0.3 },
  { style: { top: '20%', right: '5%' }, size: 'text-3xl', delay: 0.5 },
  { style: { bottom: '20%', right: '8%' }, size: 'text-xl', delay: 0.2 },
];

const kidsEmoji = ['/Img7.png', '/Img5.png', '/Img4.png', '/Img3.png'];

export default function AdmissionsCTA() {
  return (
    <section className="py-16 bg-edu-yellow rounded-xl relative overflow-hidden">
      {/* Decorative Stars */}
      {decorStars.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute ${s.size} pointer-events-none select-none`}
          style={s.style}
          animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        >
          ⭐
        </motion.div>
      ))}

      {/* Pencil decoration */}
      <motion.div
        className="absolute bottom-8 right-24 text-4xl pointer-events-none select-none opacity-50"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✏️
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/50 text-amber-800 text-xs font-bold px-4 py-2 rounded-full mb-5 border border-amber-300"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Admissions Open
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-3xl sm:text-4xl xl:text-5xl font-heading font-extrabold text-gray-900 leading-tight mb-6"
            >
              Give Your Child{' '}
              <span className="relative">
                The Best
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-white/60 rounded-full" />
              </span>{' '}
              Start In Life!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-base hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_8px_24px_rgba(45,27,142,0.4)] hover:-translate-y-1"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/70 text-gray-800 px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all duration-300 hover:-translate-y-1 border border-white/50"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: Kids Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className=""
          >
            <Image src={'/Img6.png'} alt={"Boys-Image"} className='w-60 h-60' width={500} height={400} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}